// 'use client'

// import axios from 'axios'
// import MuxPlayer from '@mux/mux-player-react'
// import { useState } from 'react'
// import { toast } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import { Loader2, Lock } from 'lucide-react'

// import { cn } from '@/lib/utils'
// import { useConfettiStore } from '@/hooks/use-confetti'

// interface VideoPlayerProps {
//   playbackId: string
//   courseId: string
//   chapterId: string
//   nextChapterId?: string
//   isLocked: boolean
//   completeOnEnd: boolean
//   title: string
// }

// export const VideoPlayer = ({
//   playbackId,
//   courseId,
//   chapterId,
//   nextChapterId,
//   isLocked,
//   completeOnEnd,
//   title,
// }: VideoPlayerProps) => {
//   const [isReady, setIsReady] = useState(false)
//   const router = useRouter()
//   const confetti = useConfettiStore()

//   const onEnd = async () => {
//     try {
//       if (completeOnEnd) {
//         await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
//           isCompleted: true,
//         })

//         if (!nextChapterId) {
//           confetti.onOpen()
//         }

//         toast.success('Progress updated')
//         router.refresh()

//         if (nextChapterId) {
//           router.push(`/courses/${courseId}/chapters/${nextChapterId}`)
//         }
//       }
//     } catch {
//       toast.error('Something went wrong')
//     }
//   }

//   return (
//     <div className="relative aspect-video">
//       {!isReady && !isLocked && (
//         <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
//           <Loader2 className="h-8 w-8 animate-spin text-secondary" />
//         </div>
//       )}
//       {isLocked && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-2 bg-slate-800 text-secondary">
//           <Lock className="h-8 w-8" />
//           <p className="text-sm">This chapter is locked</p>
//         </div>
//       )}
//       {!isLocked && (
//         <MuxPlayer
//           title={title}
//           className={cn(!isReady && 'hidden')}
//           onCanPlay={() => setIsReady(true)}
//           onEnded={onEnd}
//           autoPlay
//           playbackId={playbackId}
//         />
//       )}
//     </div>
//   )
// }

// Use normal video player

// 'use client'

// import axios from 'axios'
// import { useState } from 'react'
// import { toast } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import { Loader2, Lock } from 'lucide-react'

// import { cn } from '@/lib/utils'
// import { useConfettiStore } from '@/hooks/use-confetti'

// interface VideoPlayerProps {
//   videoUrl: string
//   courseId: string
//   chapterId: string
//   nextChapterId?: string
//   isLocked: boolean
//   completeOnEnd: boolean
//   title: string
// }

// export const VideoPlayer = ({
//   videoUrl,
//   courseId,
//   chapterId,
//   nextChapterId,
//   isLocked,
//   completeOnEnd,
//   title,
// }: VideoPlayerProps) => {
//   const [isReady, setIsReady] = useState(false)
//   const router = useRouter()
//   const confetti = useConfettiStore()

//   const onEnd = async () => {
//     try {
//       if (completeOnEnd) {
//         await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
//           isCompleted: true,
//         })

//         if (!nextChapterId) {
//           confetti.onOpen()
//         }

//         toast.success('Progress updated')
//         router.refresh()

//         if (nextChapterId) {
//           router.push(`/courses/${courseId}/chapters/${nextChapterId}`)
//         }
//       }
//     } catch {
//       toast.error('Something went wrong')
//     }
//   }

//   return (
//     <div className="relative aspect-video">
//       {!isReady && !isLocked && (
//         <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
//           <Loader2 className="h-8 w-8 animate-spin text-secondary" />
//         </div>
//       )}
//       {isLocked && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-2 bg-slate-800 text-secondary">
//           <Lock className="h-8 w-8" />
//           <p className="text-sm">This chapter is locked</p>
//         </div>
//       )}
//       {!isLocked && (
//         <video
//           title={title}
//           className={cn(!isReady && 'hidden')}
//           onCanPlay={() => setIsReady(true)}
//           onEnded={onEnd}
//           autoPlay
//           controls
//           src={videoUrl}
//         />
//       )}
//     </div>
//   )
// }

'use client';

import axios from 'axios';
import { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Loader2, Lock } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useConfettiStore } from '@/hooks/use-confetti';

interface VideoPlayerProps {
  videoUrl: string;
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
}

export const VideoPlayer = ({
  videoUrl,
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
}: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const confetti = useConfettiStore();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Pause times in seconds
  const stopTimes = [2, 4, 6].map((time) => time * 60); // Convert minutes to seconds
  const [pausedTimes, setPausedTimes] = useState<number[]>([]); // Track already paused times

  const onEnd = async () => {
    try {
      if (completeOnEnd) {
        await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
          isCompleted: true,
        });

        if (!nextChapterId) {
          confetti.onOpen();
        }

        toast.success('Progress updated');
        router.refresh();

        if (nextChapterId) {
          router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
        }
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = Math.floor(videoRef.current.currentTime); // Current playback time in seconds

      // Check if the current time matches any stop time that hasn't already been paused
      if (
        stopTimes.includes(currentTime) &&
        !pausedTimes.includes(currentTime)
      ) {
        videoRef.current.pause(); // Pause the video
        setPausedTimes((prev) => [...prev, currentTime]); // Mark this time as paused
        toast('Video paused at ' + currentTime / 60 + ' minute(s).'); // Notify the user
      }
    }
  };

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-2 bg-slate-800 text-secondary">
          <Lock className="h-8 w-8" />
          <p className="text-sm">This chapter is locked</p>
        </div>
      )}
      {!isLocked && (
        <video
          ref={videoRef}
          title={title}
          className={cn(!isReady && 'hidden')}
          onCanPlay={() => setIsReady(true)}
          onEnded={onEnd}
          onTimeUpdate={handleTimeUpdate} // Handle time updates
          autoPlay
          controls
          src={videoUrl}
        />
      )}
    </div>
  );
};
