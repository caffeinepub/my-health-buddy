# Specification

## Summary
**Goal:** Simplify the My Health Buddy UI flow, rename the helper to Luma, add a location step before the adult message, and make the grown-ups gate work reliably.

**Planned changes:**
- Rename the helper character from “Amanda” to “Luma” everywhere, and set the welcome greeting to exactly: “Hi, I’m Luma. I help you show how you feel.”
- Replace supportive wording across the UI:
  - “Thank you for telling me. Let’s tell a grown-up together.” → “Let’s tell a grown-up”
  - “Well done for telling someone. That was a brave thing to do.” → “You did the right thing 💛”
- Redesign the first screen to show only the logo, the Luma character, and one large “Start” button; move all other options to a new menu screen shown after pressing “Start”.
- Make “Show this to an adult” the largest and most visually prominent button in the entire app, centered on its screen.
- Update the feelings selection page layout so all feeling cards fit on one screen without scrolling, evenly sized in a consistent grid.
- Add a new location follow-up screen after pressing “Show this to an adult” that asks exactly “Where are you?” with three large buttons: “At school”, “At home”, “Outside”; selecting one continues to the existing adult message flow.
- Fix “Grown-ups only” to be a real button that opens a lock flow: press-and-hold a star for 3 seconds (when supported) then answer a simple math question; wrong answer shows exactly “Try again, grown-ups only”; correct answer opens the grown-ups settings page; if press-and-hold isn’t supported, require only the math question.
- Keep all updated/new screens calm, simple, child-friendly, with short English UI text.

**User-visible outcome:** The app opens to a simple Start screen, wording is shorter and consistent, feelings are selectable without scrolling, “Show this to an adult” is highly prominent and leads to a new “Where are you?” step, and “Grown-ups only” reliably gates access via a lock screen before settings.
