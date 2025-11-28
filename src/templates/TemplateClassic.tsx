// src/templates/TemplateClassic.tsx
import React from "react";
import { Box, Typography, Chip, Avatar, Divider, Stack } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export type TemplateData = {
  basic: {
    name?: string;
    title?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
    intro?: string;
  };
  education: Array<{ degree?: string; institution?: string; year?: string; percentage?: string }>;
  experience: Array<{ org?: string; position?: string; start?: string; end?: string; location?: string; description?: string }>;
  projects: Array<{ title?: string; duration?: string; teamSize?: string; technologies?: string; description?: string }>;
  skills: Array<{ name?: string; level?: number }>;
  social: Array<{ platform?: string; url?: string }>;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
    <Box sx={{ width: 5, height: 18, bgcolor: 'primary.main', borderRadius: 1 }} />
    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#333' }}>{children}</Typography>
  </Box>
);

export default function TemplateClassic({ data }: { data: TemplateData }) {
  const b = data.basic || {};
  const initials = (b.name || 'U').split(' ').map((n: string) => n.charAt(0)).slice(0, 2).join('').toUpperCase();

  return (
    <Box sx={{
      width: 800,
      maxWidth: '100%',
      bgcolor: '#fff',
      color: '#111',
      p: 4,
      fontFamily: "'Inter', sans-serif",
      borderRadius: 2,
      boxShadow: '0 6px 20px rgba(12,20,40,0.06)'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main', fontWeight: 700 }}>{initials}</Avatar>
            <Box>
              <Typography variant='h5' sx={{ fontWeight: 800 }}>{b.name || 'Your Name'}</Typography>
              <Typography variant='subtitle2' color='text.secondary'>{b.title || 'Professional Title'}</Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>{b.intro || 'Short professional summary that highlights your core strengths, experience and what you bring to the role.'}</Typography>

          <SectionTitle>Experience</SectionTitle>
          {data.experience?.length ? data.experience.map((ex, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Typography sx={{ fontWeight: 700 }}>{ex.position || 'Position'}</Typography>
                <Typography variant='caption' color='text.secondary'>{ex.start} — {ex.end}</Typography>
              </Box>
              <Typography variant='body2' color='primary.main' sx={{ fontWeight: 600 }}>{ex.org}</Typography>
              {ex.description && <Typography variant='body2' color='text.secondary' sx={{ mt: 0.5 }}>{ex.description}</Typography>}
            </Box>
          )) : <Typography variant='body2' color='text.secondary'>Add your experience</Typography>}

          <SectionTitle>Education</SectionTitle>
          {data.education?.length ? data.education.map((ed, i) => (
            <Box key={i} sx={{ mb: 1 }}>
              <Typography sx={{ fontWeight: 700 }}>{ed.degree || 'Degree'}</Typography>
              <Typography variant='body2' color='text.secondary'>{ed.institution} • {ed.year}{ed.percentage ? ` • ${ed.percentage}` : ''}</Typography>
            </Box>
          )) : <Typography variant='body2' color='text.secondary'>Add your education</Typography>}
        </Box>

        <Box sx={{ width: 260 }}>
          <Box sx={{ p: 2, borderRadius: 1, bgcolor: '#FBFBFF', mb: 2 }}>
            <SectionTitle>Contact</SectionTitle>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}><EmailIcon fontSize='small' color='action' /><Typography variant='body2' color='text.secondary'>{b.email || 'email@example.com'}</Typography></Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}><PhoneIcon fontSize='small' color='action' /><Typography variant='body2' color='text.secondary'>{b.phone || '+1234567890'}</Typography></Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}><LocationOnIcon fontSize='small' color='action' /><Typography variant='body2' color='text.secondary'>{b.address || `${b.city || ''}${b.city && b.state ? ', ' : ''}${b.state || ''}`}</Typography></Box>
            </Stack>
          </Box>

          <Box sx={{ mb: 2 }}>
            <SectionTitle>Skills</SectionTitle>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {data.skills?.length ? data.skills.map((s, i) => (
                <Chip key={i} label={s.name} size='small' sx={{ bgcolor: 'rgba(74,79,241,0.08)', color: 'primary.main', fontWeight: 600 }} />
              )) : <Typography variant='body2' color='text.secondary'>Add skills</Typography>}
            </Box>
          </Box>

          <Box>
            <SectionTitle>Projects</SectionTitle>
            {data.projects?.length ? data.projects.map((p, i) => (
              <Box key={i} sx={{ mb: 1 }}>
                <Typography sx={{ fontWeight: 600 }}>{p.title}</Typography>
                {p.technologies && (
                  <Typography variant='caption' color='text.secondary' display='block'>{p.technologies}</Typography>
                )}
                {p.description && (
                  <Typography variant='body2' color='text.secondary' sx={{ mt: 0.5 }}>{p.description}</Typography>
                )}
                <Typography variant='caption' color='text.secondary' sx={{ display: 'block', mt: 0.5 }}>{p.duration} {p.teamSize ? `• Team: ${p.teamSize}` : ''}</Typography>
              </Box>
            )) : <Typography variant='body2' color='text.secondary'>Add projects</Typography>}
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary', flexWrap: 'wrap' }}>
        {data.social?.length ? data.social.map((s, i) => (
          <Typography key={i} variant='body2'>{s.platform}: {s.url}</Typography>
        )) : <Typography variant='body2'>Add social links</Typography>}
      </Box>
    </Box>
  );
}
