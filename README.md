# JK Packers & Movers — Website

A premium, fully-responsive Next.js website for JK Packers & Movers, serving Chennai and nearby areas in Tamil Nadu.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build
npm start
```

## 📁 Project Structure

```
jkpackersandmovers/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About Us
│   ├── services/page.tsx       # Services
│   ├── service-areas/page.tsx  # Service Areas
│   ├── gallery/page.tsx        # Gallery
│   ├── contact/page.tsx        # Contact + Quote Form
│   ├── privacy-policy/page.tsx # Privacy Policy
│   ├── terms/page.tsx          # Terms & Conditions
│   ├── api/quote/route.ts      # API placeholder (backend form)
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # robots.txt
├── components/
│   ├── Header.tsx              # Sticky header with mobile menu
│   ├── Footer.tsx              # Footer with CTA banner
│   ├── ui/
│   │   └── WhatsAppFloat.tsx   # Floating WhatsApp button
│   └── sections/
│       ├── HeroSection.tsx     # Homepage hero + quick form
│       ├── ServicesSection.tsx # Services grid
│       ├── WhyChooseUs.tsx     # Why choose us
│       ├── ProcessSection.tsx  # 5-step process timeline
│       ├── PricingNotes.tsx    # Transparent pricing notes
│       ├── ServiceAreasSection.tsx
│       ├── ReviewsSection.tsx  # Reviews (placeholder until real)
│       ├── FAQSection.tsx      # Accordion FAQ with schema
│       └── QuoteForm.tsx       # Full quotation enquiry form
├── lib/
│   ├── config.ts               # ⭐ All business settings (edit here)
│   └── utils.ts                # Helper functions
├── public/
│   └── logo.jpg                # JK Packers & Movers logo
├── .env.example                # Environment variable template
└── next.config.js
```

## ⚙️ Updating Business Details

**All business information is in one file: `lib/config.ts`**

Edit this file to update:
- Phone numbers
- WhatsApp number
- Email address
- Business hours
- Service areas
- Pricing (vehicle surcharge, wardrobe fee)
- Google Review URL
- Site URL after domain setup

## 📸 Adding Gallery Photos

1. Place photos in `/public/gallery/`
2. Name them clearly: `packing-01.jpg`, `loading-01.jpg` etc.
3. Update the gallery data in `app/gallery/page.tsx`
4. Use WebP format and keep files under 200KB each

## 📝 Adding Real Customer Reviews

1. Get written permission from the customer
2. Add review objects to `components/sections/ReviewsSection.tsx`
3. Update Google Reviews URL in `lib/config.ts`

## 🌐 Deployment

### Vercel (Recommended — Free Tier Available)
```bash
npm install -g vercel
vercel deploy
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

### Self-Hosted (Node.js)
```bash
npm run build
npm start   # runs on port 3000
```

### Environment Variables (set in your host dashboard)
```
NEXT_PUBLIC_SITE_URL=https://www.jkpackersandmovers.in
NEXT_PUBLIC_WA_NUMBER=916383329304
```

## 🔍 SEO Checklist After Deployment

- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Verify site in Google Search Console
- [ ] Set up and verify Google Business Profile
- [ ] Update `NEXT_PUBLIC_SITE_URL` in config to real domain
- [ ] Update `googleReviewsUrl` in `lib/config.ts` with real Google Business Profile URL
- [ ] Add `og-image.jpg` (1200×630px) to `/public/` for social sharing
- [ ] Add `favicon.ico` to `/public/`

## ✅ Pending Items from Business (see CHECKLIST below)

See `CHECKLIST.md` for full list of items still required.

