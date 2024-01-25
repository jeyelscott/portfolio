import { RefreshCw, Users } from "react-feather";
import InnovativeProblemSolver from "./InnovativeProblemSolver";
import ContinuousLearner from "./ContinuousLearner";
import CollaborativeSpirit from "./CollaborativeSpirit";

export default function WhatSetsMeApart() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InnovativeProblemSolver />
        <ContinuousLearner />
        <CollaborativeSpirit />
      </div>
    </div>
  );
}
