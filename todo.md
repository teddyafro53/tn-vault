# TN Vault - Project TODO

## Core Features
- [x] Supabase credentials setup and environment variables
- [ ] Database schema for file metadata (user_files table)
- [ ] Row-level security (RLS) policies for user file isolation
- [ ] Supabase Storage bucket creation and configuration
- [x] Sign Up page with name, email, password fields
- [x] Sign In page with email and password authentication
- [x] Dashboard/Home page with welcome message and stats
- [x] Sidebar navigation with Dashboard, Gallery, and Logout links
- [x] File upload with drag-and-drop support (PNG, JPG, GIF, WebP)
- [x] Gallery page to view all user's uploaded images
- [x] Dark theme with blue-to-purple gradient accents
- [x] Glassmorphism effects (frosted glass, transparency, layered depth)
- [ ] File metadata storage in database
- [x] Image deletion functionality
- [x] Responsive design for mobile and desktop
- [x] Landing page with feature highlights

## Testing
- [x] Authentication flow tests (sign up, sign in, logout)
- [x] Supabase connectivity tests
- [x] Storage bucket access tests
- [ ] RLS policy verification tests

## Deployment
- [ ] GitHub repository creation and code push
- [ ] Vercel deployment configuration
- [ ] Environment variables setup on Vercel
- [ ] Final deployed URL verification

## Notes
- Supabase Storage bucket "vault-images" needs to be created manually in Supabase console
- User files table needs to be created with RLS policies
- Email verification may need to be configured in Supabase Auth settings
