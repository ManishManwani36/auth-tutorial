'use client';

import { Button } from '@/components/ui/button';
import useAddTaskModal from '@/hooks/useAddTaskModal';
import { CirclePlus } from 'lucide-react';

export default function AddTaskButton() {
  const { openAddTaskModal } = useAddTaskModal();
  return (
    <Button
      onClick={openAddTaskModal}
      className="flex justify-start hover:bg-slate-200 active:scale-95 transition-all"
      variant="ghost"
    >
      <CirclePlus className="w-6 h-6 mr-2" />
      Add Task
    </Button>
  );
}
