export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  const header = document.getElementById('main-header');
  
  if (section && header) {
    const headerOffset = header.offsetHeight;
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = sectionPosition + window.scrollY - headerOffset - 16;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const initScrollAnimations = () => {
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
      }
    });
  }, { threshold: 0.1 });
  
  scrollElements.forEach((el) => {
    observer.observe(el);
  });
  
  return () => {
    scrollElements.forEach((el) => {
      observer.unobserve(el);
    });
  };
};

export const toggleHeaderScroll = (header: HTMLElement | null, scrollY = 50) => {
  if (!header) return;
  
  if (window.scrollY > scrollY) {
    header.classList.add('py-2', 'shadow-lg');
    header.classList.remove('py-4');
  } else {
    header.classList.remove('py-2', 'shadow-lg');
    header.classList.add('py-4');
  }
};
