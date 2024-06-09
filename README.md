# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game implemented in HTML, CSS, and JavaScript. The game allows the user to play Rock Paper Scissors against the computer. The user can select their move by clicking on the respective icons, and the game will randomly generate a move for the computer. The result of each round is displayed along with the updated scores for both the user and the computer.

## Features

- **Interactive UI**: Users can select their move by clicking on the Rock, Paper, or Scissors icons.
- **Random Computer Move**: The computer's move is randomly generated each round.
- **Score Tracking**: The game tracks and displays the score for both the user and the computer.
- **Result Display**: The result of each round (win, lose, or draw) is displayed to the user.
- **Reset Functionality**: Users can reset the game at any time to start fresh.

## Technologies Used

- **HTML**: For structuring the game interface.
- **CSS**: For styling the game elements.
- **JavaScript**: For implementing the game logic and interactivity.

## Logic and Concepts

### Event Handling
- **Click Events**: Each game option (Rock, Paper, Scissors) is equipped with a click event listener that triggers the game logic when selected by the user.

### Game Logic
- **Random Move Generation**: The computer's move is determined by generating a random index and selecting the corresponding move from an array of choices.
- **Win/Lose Conditions**: The game logic determines the winner of each round based on standard Rock Paper Scissors rules:
  - Rock beats Scissors
  - Paper beats Rock
  - Scissors beat Paper
- **Score Updates**: The scores for the user and the computer are updated and displayed after each round.

### DOM Manipulation
- **Updating Text**: The result of each round and the scores are displayed to the user by updating the inner text of specific HTML elements.
- **Styling Changes**: The color of the result text changes based on the outcome (win, lose, or draw).

### Reset Functionality
- **Reset Button**: A reset button allows the user to reset the scores and start a new game. The text and color of the result display are also reset to their initial states.

## How to Run

1. Clone the repository:
    ```bash
    git clone https://github.com/vinniisingh/Rock-Paper-Scissor
    ```
2. Navigate to the project directory:
    ```bash
    cd rock-paper-scissors-game
    ```
3. Open `index.html` in your web browser to play the game.

## Screenshots


![image](https://github.com/vinniisingh/Rock-Paper-Scissor/assets/114791073/630055a2-fc1c-46c9-a0a3-b4c19f8704f9)
![image](https://github.com/vinniisingh/Rock-Paper-Scissor/assets/114791073/3571179b-fc4e-4f78-ab02-a8580db144e5)
![image](https://github.com/vinniisingh/Rock-Paper-Scissor/assets/114791073/d42913bb-dffe-4bf5-83a3-7b198650c40c)
![image](https://github.com/vinniisingh/Rock-Paper-Scissor/assets/114791073/874d1766-f60a-4ce4-afdd-6de1672e6aa9)





## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the classic game of Rock Paper Scissors.
- Icons from [source of icons].
