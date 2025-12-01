import gsap from "gsap";

// Get DOM elements
const dock = document.querySelector(".dock"); // The dock container at the bottom
const icons = document.querySelectorAll(".icon"); // Individual icons inside the dock
const trigger = document.querySelector(".dock-trigger"); // Hover trigger area above the dock

// State variables to control hover and animation logic
let isDockVisible = false;        // Is the dock currently visible?
let isDockHovered = false;        // Is the user's mouse inside the dock?
let isTriggerHovered = false;     // Is the user hovering the trigger area?
let isReadyForHover = false;      // Should proximity scaling be active?
let hasDockEntered = false;       // Tracks if the dock has been hovered at least once

function hideDock() {
  isDockVisible = false;
  isReadyForHover = false;

  gsap.to(dock, {
    bottom: "-150px", // Move back to initial CSS position
    duration: 0.5,
    ease: "power2.in",
  });

  gsap.to(icons, {
    scale: 0,
    opacity: 0,
    duration: 0.3,
  });
}

function showDock() {
  gsap.to(dock, {
    opacity: 1,
    scale: 1,
    ease: "power2.out",
    bottom: "50px",
    duration: 1,
    onComplete: () => {
      isReadyForHover = true;
    },
  });

  gsap.to(icons, {
    opacity: 1,
    scale: 1,
    transformOrigin: "bottom",
    stagger: {
      each: 0.1,
      from: "center",
      ease: "power2.inOut",
    },
  });
}

// Mouse enters the trigger area (above the dock)
trigger.addEventListener("mouseenter", () => {
  isTriggerHovered = true;
  console.log("Trigged Bhenchooo");

  if (!isDockVisible) {
    isDockVisible = true;
    showDock(); // 🧠 We'll explain this GSAP-powered function later
  }
});

// Mouse leaves the trigger
trigger.addEventListener("mouseleave", () => {
  isTriggerHovered = false;

  // If the dock isn’t being hovered either, hide it after a short delay
  setTimeout(() => {
    if (!isDockHovered) hideDock(); // 🧠 This too is animation logic
  }, 100);
});

// Track when the mouse enters/leaves the dock
dock.addEventListener("mouseenter", () => {
  isDockHovered = true;
});

dock.addEventListener("mouseleave", () => {
  isDockHovered = false;

  // Reset scale when mouse leaves the dock
  gsap.to(icons, {
    scale: 1,
    duration: 0.3,
  });

  if (!isTriggerHovered) hideDock();
});

// Mouse moves inside the dock — used for proximity-based scaling
dock.addEventListener("mousemove", (e) => {
  if (!isDockVisible || !isDockHovered || !isReadyForHover) return;

  const rect = dock.getBoundingClientRect();
  const centerX = e.clientX - rect.left;

  // This logic measures the horizontal distance of each icon from the cursor
  icons.forEach((icon) => {
    const iconRect = icon.getBoundingClientRect();
    const iconCenter = iconRect.left + iconRect.width / 2;
    const distance = Math.abs(centerX - (iconCenter - rect.left));
    const maxDistance = 120;

    const scale = Math.max(1, 1.7 - distance / maxDistance);

    // Apply the scale
    gsap.to(icon, {
      scale: scale,
      duration: 0.1,
    });
  });
});
