import { RefreshCw, Users } from "react-feather";
import InnovativeProblemSolver from "./InnovativeProblemSolver";
import ContinuousLearner from "./ContinuousLearner";
import CollaborativeSpirit from "./CollaborativeSpirit";

export default function WhatSetsMeApart() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <InnovativeProblemSolver />
        <ContinuousLearner />
        <CollaborativeSpirit />
      </div>
    </div>
  );
}
