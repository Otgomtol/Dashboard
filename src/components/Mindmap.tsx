import React, { useRef, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { Theme, Article, Connection } from '../data/blogData';

interface ForceGraphInstance {
  centerAt: (x: number, y: number, duration: number) => void;
  zoom: (factor: number, duration: number) => void;
  d3Force: (name: string, force?: unknown) => unknown;
  cooldownTicks: (ticks: number) => void;
}

interface MindmapProps {
  connections: Connection[];
  themes: Theme[];
  articles: Article[];
  selectedId: string | null;
  onNodeClick: (nodeId: string) => void;
}

interface GraphNode {
  id: string;
  name: string;
  val: number;
  color: string;
  type: 'theme' | 'article';
}

interface GraphLink {
  source: string;
  target: string;
  value: number;
}

const Mindmap: React.FC<MindmapProps> = ({
  connections,
  themes,
  articles,
  selectedId,
  onNodeClick
}) => {
  const graphRef = useRef<ForceGraphInstance | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Use fixed dimensions as requested, width will adapt via ResizeObserver
  const [dimensions, setDimensions] = React.useState({ width: 1264, height: 850 - 48 }); // Target height 850, subtract header

  // Update width dimension when container size changes, keep height fixed
  useEffect(() => {
    if (!containerRef.current) {
      console.log("Container ref not available");
      return;
    }
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const fixedHeight = 850 - 48; // Target height 850, subtract header
        console.log(`Container width: ${width}, fixed height: ${fixedHeight}`);
        setDimensions({ width, height: fixedHeight });
      }
    };
    
    // Initial measurement
    updateDimensions();
    
    // Set up resize observer for width changes
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);
    
    // Clean up
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []); // Empty dependency array as height is fixed

  // Prepare data for the graph
  const themeNodes: GraphNode[] = getAllThemes(themes).map(theme => ({
    id: theme.id,
    name: theme.name,
    val: 5 + (theme.level === 1 ? 5 : 0), // Size based on level
    color: getThemeColor(theme.level),
    type: 'theme' as const
  }));

  const themeNodeIds = new Set(themeNodes.map(node => node.id));

  const articleNodes: GraphNode[] = articles
    .filter(article => !themeNodeIds.has(article.id)) // Filter out articles with IDs that already exist as themes
    .map(article => ({
      id: article.id,
      name: article.title,
      val: 3,
      color: '#4CAF50', // Green for articles
      type: 'article' as const
    }));

  const nodes: GraphNode[] = [...themeNodes, ...articleNodes];

  const links: GraphLink[] = connections.map(conn => ({
    source: conn.source,
    target: conn.target,
    value: conn.value
  }));

  // Stabilize the graph after initial render
  useEffect(() => {
    if (graphRef.current) {
      console.log("Graph ref available, setting up stabilization");
      // Allow initial layout then stop the simulation
      setTimeout(() => {
        if (graphRef.current) {
          console.log("Stabilizing graph after initial layout");
          graphRef.current.d3Force('center', null); // Remove center force
          graphRef.current.d3Force('charge').strength(-120).distanceMax(200); // Reduce charge force
          graphRef.current.cooldownTicks(0); // Stop simulation after initial layout
        }
      }, 2000);
    }
  }, []);

  // Focus on selected node when it changes
  useEffect(() => {
    if (selectedId && graphRef.current) {
      const node = nodes.find(n => n.id === selectedId);
      if (node) {
        console.log(`Focusing on selected node: ${node.name}`);
        // Center on the selected node and zoom in without animation
        graphRef.current.centerAt(0, 0, 0);
        graphRef.current.zoom(2.5, 0);
      }
    }
  }, [selectedId, nodes]);

  return (
    <div 
      ref={containerRef} 
      className="mindmap-container border rounded-lg bg-white dark:bg-gray-800 shadow-sm overflow-hidden"
      style={{ 
        position: 'relative', 
        height: '850px', // Set fixed height as requested
        width: '100%' // Allow width to be determined by parent grid
      }}
    >
      <h2 className="text-lg font-semibold p-3 border-b dark:border-gray-700 dark:text-white">Conexões de Temas</h2>
      
      {/* Debug info - can be removed in final version */}
      <div className="text-xs p-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
        Área do Gráfico: {dimensions.width}x{dimensions.height} | Nós: {nodes.length} | Conexões: {links.length}
      </div>
      
      <div 
        className="graph-container" 
        style={{ 
          height: 'calc(100% - 70px)', // Account for header and debug bar
          width: '100%',
          position: 'relative'
        }}
      >
        {dimensions.width > 0 && dimensions.height > 0 ? (
          <ForceGraph2D
            ref={graphRef}
            graphData={{ nodes, links }}
            nodeLabel={node => (node as GraphNode).name}
            nodeColor={node => (node as GraphNode).color}
            nodeVal={node => (node as GraphNode).val}
            linkWidth={link => (link as GraphLink).value * 0.5}
            linkColor={() => '#999'}
            onNodeClick={(node) => onNodeClick((node as GraphNode).id)}
            cooldownTicks={100} // Increased for better initial layout
            cooldownTime={3000} // Longer cooldown time
            nodeRelSize={5}
            width={dimensions.width} // Use dynamically calculated width
            height={dimensions.height} // Use fixed height (minus header/debug)
            linkDirectionalParticles={0}
            d3AlphaDecay={0.01} // Slower decay for better layout
            d3VelocityDecay={0.4} // Adjusted for smoother movement
            nodeCanvasObject={(node, ctx, globalScale) => {
              const { id, name, x, y, color, val } = node as GraphNode & { x: number, y: number };
              const fontSize = val / 2;
              const isSelected = id === selectedId;
              
              // Draw node circle
              ctx.beginPath();
              ctx.arc(x, y, val, 0, 2 * Math.PI);
              ctx.fillStyle = color;
              ctx.fill();
              
              // Draw highlight for selected node
              if (isSelected) {
                ctx.beginPath();
                ctx.arc(x, y, val + 2, 0, 2 * Math.PI);
                ctx.strokeStyle = '#FF5722';
                ctx.lineWidth = 2;
                ctx.stroke();
              }
              
              // Draw node label if zoomed in enough
              if (globalScale > 0.8) {
                ctx.font = `${fontSize}px Sans-Serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#fff';
                
                // Truncate text if too long
                let displayName = name;
                if (name.length > 20) {
                  displayName = name.substring(0, 17) + '...';
                }
                
                ctx.fillText(displayName, x, y);
              }
            }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 dark:text-gray-400">Carregando mapa de conexões...</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to get all themes (flattened)
function getAllThemes(themes: Theme[]): Theme[] {
  const result: Theme[] = [];
  
  const traverse = (themeList: Theme[]) => {
    for (const theme of themeList) {
      result.push(theme);
      traverse(theme.children);
    }
  };
  
  traverse(themes);
  return result;
}

// Helper function to get color based on theme level
function getThemeColor(level: number): string {
  switch(level) {
    case 1: return '#2196F3'; // Blue for top level
    case 2: return '#9C27B0'; // Purple for second level
    case 3: return '#FF9800'; // Orange for third level
    case 4: return '#E91E63'; // Pink for fourth level
    default: return '#607D8B'; // Gray for others
  }
}

export default Mindmap;

