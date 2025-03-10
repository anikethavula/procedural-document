// Function to handle smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      })
    })
  })

  // Function to copy code to clipboard
  window.copyCode = (button) => {
    const codeBlock = button.previousElementSibling
    const code = codeBlock.textContent

    navigator.clipboard
      .writeText(code)
      .then(() => {
        const originalText = button.textContent
        button.textContent = "Copied!"
        button.style.backgroundColor = "#2ecc71"

        setTimeout(() => {
          button.textContent = originalText
          button.style.backgroundColor = ""
        }, 2000)
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
        button.textContent = "Failed!"
        button.style.backgroundColor = "#e74c3c"

        setTimeout(() => {
          button.textContent = "Copy"
          button.style.backgroundColor = ""
        }, 2000)
      })
  }

  // Add active class to current section in navigation
  const sections = document.querySelectorAll(".section")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
})

