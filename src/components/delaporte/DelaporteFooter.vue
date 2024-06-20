<template>
  <footer id="footer">
    <div>©2024 DELAPORTE</div>
    <p id="made-with">
      Made with
      <svg
        viewBox="0 0 1792 1792"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style="height: 0.8rem"
      >
        <path
          d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
          fill="#e25555"
        ></path>
      </svg>
      by
      <a href="https://cristinasilesvega.com/#/"> Cristina Siles </a>
    </p>
  </footer>
</template>

<style>
#footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-family: 'Rock Salt', cursive;
  color: var(--color-primary);
  opacity: 0.97;
  font-size: 0.9rem;
}

#made-with {
  margin-top: 1rem;
  margin-bottom: 0rem;
  font-size: 0.8rem;
  opacity: 0.85;
  cursor: pointer;
}
#made-with a:hover {
  color: #e25555;
}
</style>
