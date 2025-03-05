document.addEventListener("DOMContentLoaded", () => {
   const stepContainers = document.querySelectorAll(".step-text-container");
   const images = document.querySelectorAll(".step-image");

   const observerOptions = {
       root: null,
       rootMargin: "-50% 0px -50% 0px",
       threshold: 0
   };

   let currentIndex = -1;

   const observerCallback = (entries) => {
       entries.forEach((entry) => {
           if (entry.isIntersecting) {
               const index = Array.from(stepContainers).indexOf(entry.target);

               if (index !== currentIndex && images[index]) {
                   images.forEach((img, i) => {
                       if (i === currentIndex) {
                           img.classList.add("exit");
                           setTimeout(() => img.classList.remove("active", "exit"), 400);
                       } else {
                           img.classList.remove("exit");
                       }
                   });

                   images[index].classList.add("active");
                   currentIndex = index;
               }
           }
       });
   };

   const observer = new IntersectionObserver(observerCallback, observerOptions);
   
   stepContainers.forEach((step) => observer.observe(step));
});
