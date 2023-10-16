* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(#b6bd57, #c20a41);
  }
  
  ::selection {
    color: #fff;
    background: #ff00d4;
  }
  
  .wrapper {
    max-width: 405px;
    background: #fff;
    margin: 137px auto;
    border-radius: 7px;
    padding: 28px 0 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .task-input {
    position: relative;
    height: 52px;
    padding: 0 25px;
  }
  
  .task-input ion-icon {
    position: absolute;
    top: 50%;
    color: #999;
    font-size: 25px;
    transform: translate(17px, -50%);
  }
  
  .task-input input {
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 18px;
    border-radius: 5px;
    padding: 0 20px 0 53px;
    border: 1px solid #999;
  }
  
  .task-input input:focus,
  .task-input input.active {
    padding-left: 52px;
    border: 2px solid #f12711;
  }
  
  .task-input input::placeholder {
    color:#bfbfbf;
  }
  
  .controls,
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .controls {
    padding: 18px 25px;
    border-bottom: 1px solid #ccc;
  }
  
  .filters span {
    margin: 0 8px;
    font-size: 17px;
    color: #444444;
    cursor: pointer;
  }
  
  .filters span:first-child {
    margin-left: 0;
  }
  
  .filters span.active {
    color: #f12711;
  }
  
  .clear-btn {
    border: none;
    opacity: 0.6;
    outline: none;
    color:#fff;
    cursor: pointer;
    font-size: 13px;
    padding: 7px 13px;
    border-radius: 4px;
    letter-spacing: 0.3px;
    pointer-events: none;
    transition: transform 0.25s ease;
    background: linear-gradient(135deg, #e20c4c, #7b830a 100%);
  }
  
  .clear-btn.active {
    opacity: 0.9;
    pointer-events: auto;
  }
  
  .clear-btn:active {
    transform: scale(0.93);
  }
  
  .task-box {
    margin-top: 20px;
    margin-right: 5px;
    padding: 0 20px 10px 25px;
  }
  
  .task-box.overflow {
    overflow-y: auto;
    max-height: 300px;
  }
  
  .task-box::-webkit-scrollbar {
    width: 5px;
  }
  
  .task-box::-webkit-scrollbar-track {
    background:#f12711;
    border-radius: 25px;
  }
  
  .task-box::-webkit-scrollbar-thumb {
    background: #e6e6e6;
    border-radius: 25px;
  }
  
  .task-box .task {
    list-style: none;
    font-size: 17px;
    margin-bottom: 18px;
    padding-bottom: 16px;
    align-items: flex-start;
    border-bottom: 1px solid #ccc;
  }
  
  .task-box .task:last-child {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
  }
  
  .task-box .task label {
    display: flex;
    align-items: flex-start;
  }
  
  .task label input {
    margin-top: 7px;
    accent-color:rgba(160, 7, 53, 0.267);
  ;
  }
  
  .task label p {
    user-select: none;
    margin-left: 12px;
    word-wrap: break-word;
  }
  
  .task label p.checked {
    text-decoration: line-through;
  }
  
  .task-box .settings {
    position: relative;
  }
  
  .settings :where(i, li) {
    cursor: pointer;
  }
  
  .settings .task-menu {
    position: absolute;
    right: -5px;
    bottom: -65px;
    padding: 5px 0;
    background: #fff;
    border-radius: 4px;
    transform: scale(0);
    transform-origin: top right;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;
    z-index: 10;
  }
  
  .task-box .task:last-child .task-menu {
    bottom: 0;
    transform-origin: bottom right;
  }
  
  .task-box .task:first-child .task-menu {
    bottom: -65px;
    transform-origin: top right;
  }
  
  .task-menu.show {
    transform: scale(1);
  }
  
  .task-menu li {
    height: 25px;
    font-size: 16px;
    margin-bottom: 2px;
    padding: 17px 15px;
    cursor: pointer;
    justify-content: flex-start;
  }
  
  .task-menu li:last-child {
    margin-bottom: 0;
  }
  
  .settings li:hover {
    background: #000;
  }
  
  .settings li i {
    padding-right: 8px;
  }
  
  @media (max-width: 400px) {
    body {
      padding: 0 10px;
    }
    .wrapper {
      padding: 20px 0;
    }
    .filters span {
      margin: 0 5px;
    }
    .task-input {
      padding: 0 20px;
    }
    .controls {
      padding: 18px 20px;
    }
    .task-box {
      margin-top: 20px;
      margin-right: 5px;
      padding: 0 15px 10px 20px;
    }
    .task label input {
      margin-top: 4px;
    }
  }
  
    
  
