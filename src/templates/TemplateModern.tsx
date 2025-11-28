// src/templates/TemplateModern.tsx
import React from "react";
import { Box, Typography, Divider, Avatar, Chip, Stack } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { TemplateData } from "./TemplateClassic";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
      <Box sx={{ width: 6, height: 20, bgcolor: 'primary.main', borderRadius: 1 }} />
      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{children}</Typography>
    </Box>
  );
}

export default function TemplateModern({ data }: { data: TemplateData }) {
  const b = data.basic || {};
  const initials = (b.name || 'U').split(' ').map((n: string) => n.charAt(0)).slice(0, 2).join('').toUpperCase();

  return (
    <Box sx={{
      width: 820,
      maxWidth: '100%',
      bgcolor: '#fff',
      color: '#111',
      p: 4,
      borderRadius: 2,
      boxShadow: '0 8px 28px rgba(12,20,40,0.08)',
      fontFamily: "'Inter', sans-serif"
    }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 4 }}>
        {/* Left sidebar */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Avatar sx={{ width: 72, height: 72, bgcolor: 'primary.main', fontWeight: 700 }}>{initials}</Avatar>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: 800 }}>{b.name || 'Your Name'}</Typography>
              <Typography variant='body2' color='text.secondary'>{b.title}</Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <EmailIcon fontSize='small' color='action' />
              <Typography variant='body2' color='text.secondary'>{b.email || 'email@example.com'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <PhoneIcon fontSize='small' color='action' />
              <Typography variant='body2' color='text.secondary'>{b.phone || '+1234567890'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <LocationOnIcon fontSize='small' color='action' />
              <Typography variant='body2' color='text.secondary'>{b.city || ''}{b.city && b.state ? ', ' : ''}{b.state || ''}</Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <SectionTitle>Skills</SectionTitle>
          <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap' }}>
            {data.skills?.length ? data.skills.map((s, i) => (
              <Chip key={i} label={s.name} size='small' sx={{ bgcolor: 'rgba(74,79,241,0.08)', color: 'primary.main', fontWeight: 600, mb: 1 }} />
            )) : <Typography variant='body2' color='text.secondary'>Add skills</Typography>}
          </Stack>

          <Divider sx={{ mt: 2 }} />

          <SectionTitle>Projects</SectionTitle>
          {data.projects?.slice(0, 3).length ? data.projects.slice(0, 3).map((p, i) => (
            <Box key={i} sx={{ mb: 1 }}>
              <Typography variant='body2' sx={{ fontWeight: 700 }}>{p.title}</Typography>
              <Typography variant='caption' color='text.secondary' display='block'>{p.technologies}</Typography>
            </Box>
          )) : <Typography variant='body2' color='text.secondary'>Add projects</Typography>}
        </Box>

        {/* Main content */}
        <Box>
          <Typography variant='body1' color='text.secondary' sx={{ mb: 2 }}>{b.intro || 'A concise professional summary that highlights your strengths, core skills and what value you bring. Keep it sharp and results-oriented.'}</Typography>

          <SectionTitle>Experience</SectionTitle>
          {data.experience?.length ? data.experience.map((ex, i) => (
            <Box key={i} sx={{ mb: 2, p: 2, borderRadius: 1, background: '#FBFBFF' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}>
                <Typography sx={{ fontWeight: 800 }}>{ex.position}</Typography>
                <Typography variant='caption' color='text.secondary'>{ex.start} — {ex.end}</Typography>
              </Box>
              <Typography variant='body2' color='primary.main' sx={{ fontWeight: 600 }}>{ex.org}</Typography>
              {ex.description && <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>{ex.description}</Typography>}
            </Box>
          )) : <Typography variant='body2' color='text.secondary'>Add experience</Typography>}

          <SectionTitle>Education</SectionTitle>
          {data.education?.length ? data.education.map((ed, i) => (
            <Box key={i} sx={{ mb: 1 }}>
              <Typography sx={{ fontWeight: 700 }}>{ed.degree}</Typography>
              <Typography variant='body2' color='text.secondary'>{ed.institution} • {ed.year}</Typography>
            </Box>
          )) : <Typography variant='body2' color='text.secondary'>Add education</Typography>}

          <SectionTitle>Projects</SectionTitle>
          {data.projects?.length ? data.projects.map((p, i) => (
            <Box key={i} sx={{ mb: 1 }}>
              <Typography sx={{ fontWeight: 700 }}>{p.title}</Typography>
              <Typography variant='body2' color='text.secondary'>{p.description || p.technologies}</Typography>
            </Box>
          )) : <Typography variant='body2' color='text.secondary'>Add projects</Typography>}
        </Box>
      </Box>
    </Box>
  );
}
