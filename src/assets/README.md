# Assets Folder

This folder contains all image assets used in the portfolio.

## Folder Structure

```
assets/
└── images/
    ├── projects/      # Project showcase images
    ├── research/      # Research project images
    ├── blog/          # Blog post featured images
    ├── profile/       # Profile pictures and headshots
    ├── memberships/   # Organization/company logos
    ├── awards/        # Award images/icons
    └── lifestyle/     # Lifestyle and personal images
```

## Usage

### Importing Images in Components

When importing images from the assets folder, use relative paths:

```typescript
import projectImage from '../assets/images/projects/airbnb-analytics.jpg';
```

### Using Images in Data

In `src/data/index.ts`, you can reference images like this:

```typescript
imageUrl: "/src/assets/images/projects/airbnb-analytics.jpg"
```

Or use imports for better bundling:

```typescript
import airbnbImage from '../assets/images/projects/airbnb-analytics.jpg';

export const projects: Project[] = [
  {
    imageUrl: airbnbImage,
    // ...
  }
];
```

## Image Recommendations

- **Projects**: 800x600px or 1200x900px (16:9 or 4:3 ratio)
- **Research**: 800x600px
- **Blog**: 1200x800px (3:2 ratio for featured, 800x600px for cards)
- **Profile**: 800x800px (square, 1:1 ratio)
- **Memberships**: 200x200px (square logos)
- **Awards**: 400x400px (square icons)
- **Lifestyle**: 1200x800px or 1600x900px (various ratios for personal photos)

## File Naming Convention

Use lowercase with hyphens:
- ✅ `airbnb-analytics-warehouse.jpg`
- ✅ `medscribe-ai.png`
- ❌ `Airbnb_Analytics.jpg`
- ❌ `medScribe AI.png`

