const counters = document.querySelectorAll('.total');

counters.forEach(counter => {
  const targetCount = counter.getAttribute('data-count');
  let count = counter.innerText;
  
  const intervalCount = setInterval(() => {
    counter.innerText = ++count;
    if (count == targetCount) {
      clearInterval(intervalCount);
    };
    
    if (count >= 1000) {
      counter.innerText = count.toLocaleString();
      return false;
    };
    
  }, 1);
})

