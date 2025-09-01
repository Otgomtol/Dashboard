import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

/**
 * Props for the HelpDialog component.
 */
interface HelpDialogProps {
  /**
   * Controls whether the dialog is open.
   */
  open: boolean;
  /**
   * Event handler for when the open state of the dialog changes.
   */
  onOpenChange: (open: boolean) => void;
  /**
   * The title to be displayed in the dialog's header.
   */
  title: string;
  /**
   * The content to be displayed within the dialog. Can be a simple string or complex JSX.
   */
  children: React.ReactNode;
}

/**
 * A controlled, reusable dialog component for displaying help and information.
 * It accepts a title and content dynamically.
 * @param {HelpDialogProps} props The props for the component.
 */
export const HelpDialog = ({ open, onOpenChange, title, children }: HelpDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};