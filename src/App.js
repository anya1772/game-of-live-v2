import { useGameOfLive2 } from "./gameOfLive2";

export function App() {
  const {board} = useGameOfLive2()

  return (
    <div>
      {board}
    </div>
  );
}
