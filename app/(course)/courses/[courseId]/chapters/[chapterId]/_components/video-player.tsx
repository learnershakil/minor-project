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

// 'use client'

// import axios from 'axios'
// import { useState, useEffect, useRef } from 'react'
// import { toast } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import { Loader2, Lock } from 'lucide-react'

// import { cn } from '@/lib/utils'
// import { useConfettiStore } from '@/hooks/use-confetti'
// import {   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalTrigger } from '@/components/ui/animated-modal';
// interface VideoPlayerProps {
//   videoUrl: string;
//   courseId: string;
//   chapterId: string;
//   nextChapterId?: string;
//   isLocked: boolean;
//   completeOnEnd: boolean;
//   title: string;
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
//   const [isReady, setIsReady] = useState(false);
//   const [quizData, setQuizData] = useState<any>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const router = useRouter();
//   const confetti = useConfettiStore();
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   // Fetch quiz data
//   useEffect(() => {
//     const fetchQuizData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/quiz?id=${chapterId}`);
//         const data = await response.json();
//         setQuizData(data);
//       } catch (error) {
//         console.error('Error fetching quiz data:', error);
//       }
//     };

//     fetchQuizData();
//   }, [chapterId]);

//   // Extract stop times from quiz data
//   const stopTimes = quizData ? [quizData.stop].map((time: number) => time * 60) : [];

//   useEffect(() => {
//     const handleTimeUpdate = () => {
//       if (videoRef.current) {
//         const currentTime = videoRef.current.currentTime;
//         if (stopTimes.includes(Math.floor(currentTime))) {
//           videoRef.current.pause();
//           setIsModalOpen(true);
//         }
//       }
//     };

//     if (videoRef.current) {
//       videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
//     }

//     return () => {
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
//       }
//     };
//   }, [stopTimes]);

//   const onEnd = async () => {
//     try {
//       if (completeOnEnd) {
//         await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
//           isCompleted: true,
//         });
//       }
//     } catch (error) {
//       console.error('Error updating progress:', error);
//     }
//   };

//   return (
//     <div>
//       <video ref={videoRef} src={videoUrl} controls onEnded={onEnd} />
//       {quizData && (
//         <Modal>
//           <ModalBody>
//             <ModalContent>
//               <div>
//                 <h2>heeelo</h2>
//                 <h3>{quizData.question}</h3>
//                 <ul>
//                   {quizData.options.map((option: string, index: number) => (
//                     <li key={index}>{option}</li>
//                   ))}
//                 </ul>
//               </div>
//             </ModalContent>
//           </ModalBody>
//         </Modal>
//       )}
//     </div>
//   );
// };

'use client'

import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, RadioGroup, Radio } from '@nextui-org/react'

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
  const [quizData, setQuizData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Fetch quiz data
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/quiz?id=${chapterId}`);
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, [chapterId]);

  // Extract stop times from quiz data
  const stopTimes = quizData ? [quizData.stop].map((time: number) => time * 60) : [];

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        if (stopTimes.includes(Math.floor(currentTime))) {
          videoRef.current.pause();
          setIsModalOpen(true);
        }
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [stopTimes]);

  const onEnd = async () => {
    try {
      if (completeOnEnd) {
        await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
          isCompleted: true,
        });
      }
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const handleAnswerSelection = (value: string) => {
    setSelectedAnswer(value);
    if (value === quizData.correct) {
      setFeedbackMessage(`Correct! ${quizData.reason}`);
    } else {
      setFeedbackMessage(`Incorrect. ${quizData.explaination}`);
    }
  };

  return (
    <div>
      <video ref={videoRef} src={videoUrl} controls onEnded={onEnd} />
      {quizData && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0', // Background color
            color: '#333', // Text color
          }}
        >
          <ModalContent>
            <ModalHeader>
              <h3 id="modal-title" style={{ color: '#0070f3' }}>Quiz Time!</h3> {/* Heading with color */}
            </ModalHeader>
            <ModalBody>
              <h4>{quizData.question}</h4>
              <RadioGroup onChange={handleAnswerSelection}>
                {quizData.options.map((option: string, index: number) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </RadioGroup>
              {selectedAnswer && (
                <div style={{ marginTop: '20px', color: selectedAnswer === quizData.correct ? 'green' : 'red' }}>
                  {feedbackMessage}
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};