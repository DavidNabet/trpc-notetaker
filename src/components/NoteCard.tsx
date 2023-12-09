import { useState } from "react";

import ReactMarkdown from "react-markdown";

import { type RouterOutputs } from "~/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpended, setIsExpended] = useState(true);

  return (
    <div className="card bg-base-100 mt-5 border border-gray-200 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpended ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpended(!isExpended)}
        >
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <button
            className="btn-warning btn-xs btn px-5 font-bold"
            onClick={onDelete}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};
