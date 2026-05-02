---
layout: post
title: "Interactive 3D visualization of Complex Roots of High-Degree Polynomials"
date: 2026-04-30 22:29:00 +0000
permalink: /:year/:month/:day/:title.html
excerpt_separator: <!--more-->
description: "Interactive 3D visualization showing the behavior of complex roots. You can rotate (and eventualy zoom into ...) the graph directly."
tags: Math Python Polynomials Creative-Coding 3D
---

Below is a 3D interactive visualization of complex roots of High-Degree Polynomials. **Note:** The interactive 3D model is resource-heavy and may be disabled on some mobile devices to prevent crashes.

<!--more-->

<style>
  .poly-launcher {
    position: relative;
    width: 100%;
    height: 600px;
    font-family: 'Georgia', serif;
  }
  .poly-iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #eee;
    touch-action: none;
  }
  .poly-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(ellipse at center, rgba(10,14,26,0.3) 0%, rgba(10,14,26,0.75) 100%);
    transition: opacity 0.6s ease;
    z-index: 10;
  }
  .poly-overlay.fade-out {
    opacity: 0;
    pointer-events: none;
  }
  .poly-preview-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.55;
  }
  .poly-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 13px 28px;
    background: transparent;
    color: #a8d4f5;
    border: 1px solid rgba(100,170,240,0.45);
    border-radius: 3px;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: background 0.25s, border-color 0.25s, color 0.25s;
  }
  .poly-btn:hover {
    background: rgba(100,170,240,0.12);
    border-color: rgba(100,170,240,0.8);
    color: #dff0ff;
  }
</style>

<div class="poly-launcher">

  <iframe
    class="poly-iframe"
    src="{{ '/assets/visualizations/new_polynomial_interactive_jekyll.html' | relative_url }}"
    frameborder="0"
    allowfullscreen>
  </iframe>

  <div class="poly-overlay" id="polyOverlay">
    <img
      class="poly-preview-img"
      src="{{ '/assets/visualizations/polynomial_preview.png' | relative_url }}"
      alt="3D polynomial roots preview"
      onerror="this.style.display='none'"
    />
    <button class="poly-btn" onclick="launchPoly()">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2.5L13 8L3 13.5V2.5Z" fill="currentColor"/>
      </svg>
      Launch 3D View
    </button>
  </div>

</div>

[Full Screen View]({{ '/assets/visualizations/new_polynomial_interactive_jekyll.html' | relative_url }})

<script>
function launchPoly() {
  var overlay = document.getElementById('polyOverlay');
  overlay.classList.add('fade-out');
}
</script>

*Generated with Python · [@lbarqueira.bsky.social](https://bsky.app/profile/lbarqueira.bsky.social)*
