


import { useState } from "react";
import { FeedbackStage } from "./Stages/FeedbackStage";
import { FeedbackContentStage } from "./Stages/FeedbackContentStage";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thougthImageUrl from "../../assets/thought.svg";
export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thougthImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackTypeProps = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackTypes] = useState<FeedbackTypeProps | null>(
    null,
  );

  function handleRestartFeedback(){
    setFeedbackTypes(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
        <FeedbackStage onFeedbackTypeChanged={setFeedbackTypes} />
      ) : (
        <FeedbackContentStage 
        feedbackType={feedbackType} 
        onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          {" "}
          Rocketseat{" "}
        </a>
      </footer>
    </div>
  );
}
