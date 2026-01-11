# 🎮 QUICK REFERENCE - Minecraft Portfolio

## 🕹️ Controls
```
Movement:       W/A/S/D or Arrow Keys
Interact:       Click when nearby blocks
Inventory:      Bottom-right corner
```

## 📂 File Structure Quick Guide

| Task | File |
|------|------|
| Change skills | `src/components/levels/SkillsQuest.jsx` |
| Change projects | `src/components/levels/ProjectsQuest.jsx` |
| Change contact | `src/components/levels/ContactQuest.jsx` |
| Change colors | `src/styles/interactive.css` |
| Change backgrounds | `src/styles/GameScreen.css` |
| Change UI | `src/styles/GameUI.css` |
| Main app logic | `src/App.js` |

## 🎨 Common Color Codes

```
Gold:           #FFD700
Green:          #00FF00
Red:            #FF0000
Purple:         #7e0de1
Brown:          #8B4513
Orange:         #FF8C00
```

## ✏️ Quick Edits

### Add a Skill
```javascript
// In SkillsQuest.jsx, add to skills array:
{ x: 45, y: 50, name: 'Python', icon: '🐍', color: '#366994' },
```

### Add a Project
```javascript
// In ProjectsQuest.jsx, add to projects array:
{
  x: 35, y: 45,
  title: 'My Cool App',
  desc: 'Description here',
  icon: '🚀',
  link: 'https://github.com/...'
},
```

### Change Block Color
```css
/* In interactive.css */
.block { background-color: #YOUR_COLOR; }
```

### Change Background
```css
/* In GameScreen.css */
.spawn-area {
  background: linear-gradient(180deg, #COLOR1 0%, #COLOR2 100%);
}
```

## 🔴 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| Blocks not clickable | Increase interaction distance or move blocks |
| Styles not showing | Clear cache (Ctrl+Shift+Del) and restart |
| Text too small | Increase font-size in CSS |
| Player moves too fast | Change speed value in GameScreen.jsx |
| Colors look off | Check hex color codes |

## 📦 NPM Commands

```bash
npm start          # Start dev server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject (irreversible!)
```

## 🌐 Social Link Template

```javascript
<a href='https://YOUR_LINK' target='_blank' rel='noopener noreferrer'>
  LABEL: your-handle
</a>
```

## 📊 Block Positioning Guide

```
x: 0-33%    → Left side
x: 33-66%   → Center
x: 66-100%  → Right side

y: 0-33%    → Top
y: 33-66%   → Middle
y: 66-100%  → Bottom
```

## 🎯 Game Flow

```
User lands → Spawn Area
           ↓
    Choose Quest:
    • Skills Quest → Collect skills → Add to inventory
    • Projects Quest → View projects → Open detail modal
    • Contact Quest → Send message → Connect
           ↓
   Return to Spawn (via portal blocks)
```

## 💾 Deploy Checklist

- [ ] All content updated
- [ ] Links verified
- [ ] Colors look good
- [ ] No broken images
- [ ] Mobile responsive tested
- [ ] Run `npm run build`
- [ ] Upload to hosting

## 📱 Responsive Breakpoints

```css
@media (max-width: 1024px) { /* Tablets */ }
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 480px) { /* Small mobile */ }
```

## 🎨 Minecraft Palette

```
Grass:      #2d5016 / #3d6e1f
Dirt:       #6B4423 / #8B4513
Stone:      #404040 / #505050
Wood:       #8B4513 / #654321
Gold:       #FFD700
Iron:       #D3D3D3
Diamond:    #00FFFF
```

---

**Need more help?** Check `CUSTOMIZATION_GUIDE.md` for detailed instructions!
