function createGame(player1, hour, player2) {
    return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
      </li>
    `
  }
  
  let delay = -0.4;
  function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
    `
  }
  
  document.querySelector("#cards").innerHTML =
    createCard("24/11", "quinta", createGame("brazil", "18:00", "serbia") +  createGame("uruguai", "20:00", "brazil") +  createGame("cameroon", "9:00", "uruguai")) +
   
    createCard(
      "28/11",
      "segunda",
      createGame("switzerland", "13:00", "brazil") +
        createGame("serbia", "10:00", "uruguai") +
        createGame("portugal", "13:00", "brazil") 

    ) 
    