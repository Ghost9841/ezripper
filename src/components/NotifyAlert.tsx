import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function PrankButton() {
  const [isOpen, setIsOpen] = useState(false);

  const prankEmail = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={prankEmail}
        className="bg-[#4c2278] hover:bg-[#5d2d8f] text-white font-medium px-6 py-2 rounded-lg transition"
      >
        Notify Me
      </button>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen} >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#4c2278] text-3xl">
              Surprise! 🎉
            </AlertDialogTitle>
            <AlertDialogDescription className="text-2xl">
              Ya this Notify me also doesn't work... but nice try!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-[#4c2278] text-[#4c2278] hover:bg-[#4c2278]/10">
              I got Pranked
            </AlertDialogCancel>
            <AlertDialogAction className="bg-[#4c2278] hover:bg-[#5d2d8f]">
             I got Trolled
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}