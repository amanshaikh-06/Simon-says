# 🎮 Simon Says

A classic memory game built with **HTML, CSS and vanilla JavaScript**. Watch the sequence of flashing colors, then repeat it in the same order. Every level adds one more color, so how far can you go?

## 🕹️ How to Play

1. Press **any key** on your keyboard to start the game.
2. The game flashes a button. Click that button.
3. Each level adds one more random color to the sequence. Repeat the **entire sequence** in the same order.
4. If you click the wrong button, the screen flashes red and the game is over.
5. Press any key to restart and beat your **High Score**.

## ✨ Features

- Random sequence generated every game
- Level counter that updates as you progress
- High score tracking (for the current session)
- Flash animation for the game's sequence and a different flash for your clicks
- Red screen flash on game over, with your final score shown
- Simple, clean UI

## 🛠️ Tech Stack

- **HTML5**: structure
- **CSS**: layout (Flexbox) and styling
- **JavaScript**: game logic, DOM manipulation and event handling

## 📁 Project Structure

```
simon-says/
├── index.html   # Page structure
├── style.css    # Styling and flash effects
└── app.js       # Game logic
```

## 🚀 Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/amanshaikh-06/Simon-says.git
   ```
2. Go into the folder:
   ```bash
   cd simon-says
   ```
3. Open `index.html` in your browser (or use the **Live Server** extension in VS Code).

No installation or build step needed.

## 🔮 Future Improvements

- Add sound effects for each color
- Save the high score using `localStorage`
- Add a start button for mobile/touch devices
- Add difficulty levels (faster flashes)

## 🤝 Contributing

Suggestions and improvements are welcome. Feel free to fork the repo and open a pull request.

## 📄 License

This project is open source and free to use for learning purposes.

---

Made with ❤️ while learning web development.