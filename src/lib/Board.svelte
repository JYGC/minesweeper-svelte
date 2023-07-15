<script lang="ts">
  import { Fireworks, type FireworksOptions } from "@fireworks-js/svelte";
  import Square from "./Square.svelte";
  import { GameEngine } from "./game-engine";

  let gameEngine: GameEngine = new GameEngine();

  const handleRightClick = (rowIdx, colIdx) => {
    gameEngine.flagSquare(rowIdx, colIdx);
    gameEngine = gameEngine;
  };

  const handleClick = (rowIdx, colIdx) => {
    gameEngine.digSquare(rowIdx, colIdx);
    gameEngine = gameEngine;
  };

  let endGameMessage: string = "";
  $: {
    switch(gameEngine.gameState) {
      case "LOST":
        endGameMessage = "You were killed by a mine!";
        break;
      case "WON":
        endGameMessage = "You found all the mines!";
        break;
      default:
        endGameMessage = "";
    }
  }
  let fireWorks: Fireworks;
  const options: FireworksOptions = {
    opacity: 1,
  };
</script>

{#if gameEngine.hasWon}
<Fireworks
    bind:this={fireWorks}
    {options}
    class="fireworks"
    />
{/if}
<div class="msg-container">{gameEngine.isGameOngoing ? `Find ${gameEngine.numberOfMines} hidden mines` : endGameMessage}</div>
<div class="board-container{endGameMessage.length > 0 ? ' game-ended' : ''}">
  {#each gameEngine.board as row, rowIdx}
  <div>
    {#each row as sqState, colIdx}
    <Square
        squareState={sqState}
        onClick={() => handleClick(rowIdx, colIdx)}
        onContextMenu={() => handleRightClick(rowIdx, colIdx)}/>
    {/each}
  </div>
  {/each}
</div>

<style>
  .msg-container {
    height: 50px;
  }

  .game-ended {
    pointer-events: none;
  }
  
  :global(.fireworks) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
  }
</style>