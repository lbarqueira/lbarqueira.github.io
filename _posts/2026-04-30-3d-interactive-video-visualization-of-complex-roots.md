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
    background: #0a0e1a;
    border: 1px solid #1e2a3a;
    border-radius: 6px;
    overflow: hidden;
    font-family: 'Georgia', serif;
  }
  .poly-preview-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.55;
  }
  .poly-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: radial-gradient(ellipse at center, rgba(10,14,26,0.3) 0%, rgba(10,14,26,0.75) 100%);
  }
  .poly-btn {
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
  .poly-iframe-wrap {
    display: none;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .poly-iframe-wrap iframe {
    width: 100%;
    height: 100%;
    border: none;
    touch-action: none;
  }
  .poly-loading {
    display: none;
    position: absolute;
    inset: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    background: #0a0e1a;
    color: rgba(160,200,255,0.7);
    font-size: 0.82rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .poly-spinner {
    width: 32px;
    height: 32px;
    border: 2px solid rgba(100,170,240,0.15);
    border-top-color: rgba(100,170,240,0.7);
    border-radius: 50%;
    animation: poly-spin 0.9s linear infinite;
  }
  @keyframes poly-spin { to { transform: rotate(360deg); } }

</style>

<div class="poly-launcher" id="polyLauncher">

  <!-- Replace with a real screenshot of your visualization -->
  <img
    class="poly-preview-img"
    src="{{ '/assets/visualizations/polynomial_preview.png' | relative_url }}"
    alt="3D polynomial roots preview"
    onerror="this.style.display='none'"
  />

  <div class="poly-overlay" id="polyOverlay">
    <button class="poly-btn" onclick="launchPoly()">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2.5L13 8L3 13.5V2.5Z" fill="currentColor"/>
      </svg>
      Launch 3D View
    </button>
  </div>

  <div class="poly-loading" id="polyLoading">
    <div class="poly-spinner"></div>
    <span>Loading visualization…</span>
  </div>

  <div class="poly-iframe-wrap" id="polyIframeWrap"></div>

</div>

[Full Screen View]({{ '/assets/visualizations/new_polynomial_interactive_jekyll.html' | relative_url }})

<script>
function launchPoly() {
  var overlay = document.getElementById('polyOverlay');
  var loading = document.getElementById('polyLoading');
  var wrap    = document.getElementById('polyIframeWrap');

  overlay.style.display = 'none';
  loading.style.display = 'flex';

  var iframe = document.createElement('iframe');
  iframe.src = "{{ '/assets/visualizations/new_polynomial_interactive_jekyll.html' | relative_url }}";
  iframe.setAttribute('allowfullscreen', '');
  iframe.onload = function() {
    loading.style.display = 'none';
    wrap.style.display    = 'block';
  };
  wrap.appendChild(iframe);
}
</script>

*Generated with Python · [@lbarqueira.bsky.social](https://bsky.app/profile/lbarqueira.bsky.social)*
