'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import useAddTaskModal from '@/hooks/useAddTaskModal';

export default function AddTaskModal() {
  const { isOpen, toggleAddTaskModal } = useAddTaskModal();
  return (
    <Dialog open={isOpen} onOpenChange={toggleAddTaskModal}>
      <DialogContent className="sm:max-w-[425px]">
        {/* TODO: add task form and connected logic */}
        <Separator />
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Add Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
