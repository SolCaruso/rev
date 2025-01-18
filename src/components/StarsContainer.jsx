"use client";
import { useState, useEffect } from 'react'
import { topStars, rightStars, bottomStars, leftStars } from '@/components/starData'

const POSSIBLE_STATES = ['off', 'medium', 'high']

function getRandomState() {
  return POSSIBLE_STATES[Math.floor(Math.random() * POSSIBLE_STATES.length)]
}

/**
 * Picks a random subset (like 10%) of the stars
 * and sets them to a random state: 'off', 'medium', or 'high'.
 */
function twinkleSomeStars(stars) {
  return stars.map(star => {
    // Maybe only 10% chance we change this star
    const shouldChange = Math.random() < 0.1
    if (shouldChange) {
      return { ...star, currentState: getRandomState() }
    }
    return star
  })
}

export function StarsContainer() {
  // We store "currentState" for each star in an array.
  // By default, it’s whatever the star’s initialState was.
  const [top, setTop] = useState(
    topStars.map(star => ({ ...star, currentState: star.initialState }))
  )
  const [right, setRight] = useState(
    rightStars.map(star => ({ ...star, currentState: star.initialState }))
  )
  const [bottom, setBottom] = useState(
    bottomStars.map(star => ({ ...star, currentState: star.initialState }))
  )
  const [left, setLeft] = useState(
    leftStars.map(star => ({ ...star, currentState: star.initialState }))
  )

  // This effect will “twinkle” random stars every 1 second.
  useEffect(() => {
    const interval = setInterval(() => {
      // For each region, randomly pick ~10% of the stars to change state
      setTop(old => twinkleSomeStars(old))
      setRight(old => twinkleSomeStars(old))
      setBottom(old => twinkleSomeStars(old))
      setLeft(old => twinkleSomeStars(old))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="Features_stars__YRhs6">
      <div className="Features_top__hfxko">
        {top.map((star, i) => (
          <div
            key={i}
            className="Features_star__CMn8R"
            data-state={star.currentState}
            style={star.style}
          />
        ))}
      </div>

      <div className="Features_right___pNrD">
        {right.map((star, i) => (
          <div
            key={i}
            className="Features_star__CMn8R"
            data-state={star.currentState}
            style={star.style}
          />
        ))}
      </div>

      <div className="Features_bottom__lzPWj">
        {bottom.map((star, i) => (
          <div
            key={i}
            className="Features_star__CMn8R"
            data-state={star.currentState}
            style={star.style}
          />
        ))}
      </div>

      <div className="Features_left__nIVgE">
        {left.map((star, i) => (
          <div
            key={i}
            className="Features_star__CMn8R"
            data-state={star.currentState}
            style={star.style}
          />
        ))}
      </div>
    </div>
  )
}