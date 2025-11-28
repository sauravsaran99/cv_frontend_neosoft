import React, { useMemo, useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Breadcrumbs,
    Link,
    Chip,
    Button,
    Stack,
} from "@mui/material";
import DashboardLayout from "../layouts/DashboardLayout";
import LayoutCard from "../components/LayoutCard";
import TemplatePreview from "../components/TemplatePreview";

/**
 * Example templates data. Replace thumbnails with real images or server URLs.
 * Thumbnails can be PNG/SVG or base64 placeholders while developing.
 */
const TEMPLATES = [
    {
        id: "layout-1",
        name: "Classic Professional",
        description: "Clean two-column layout with bold name heading and sidebar for skills.",
        thumbnail:
            "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        sampleHtml: "<h3>Classic Professional</h3><p>Two-column layout example content.</p>",
    },
    {
        id: "layout-2",
        name: "Modern Minimal",
        description: "Simple, spacious layout focusing on readability and typography.",
        thumbnail:
            "https://images.unsplash.com/photo-1693045181178-d5d83fb070c8?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        sampleHtml: "<h3>Modern Minimal</h3><p>Large headings, simple lines.</p>",
    },
    {
        id: "layout-3",
        name: "Creative One-Page",
        description: "One-page layout with emphasis on projects and visuals.",
        thumbnail:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
        sampleHtml: "<h3>Creative One-Page</h3><p>Perfect for designers.</p>",
    },
];

export default function LayoutsPage() {
    const templates = useMemo(() => TEMPLATES, []);
    const [previewId, setPreviewId] = useState<string | null>(null);
    const previewTemplate = templates.find((t) => t.id === previewId) ?? undefined;

    const handlePreview = (id: string) => setPreviewId(id);
    const handleClosePreview = () => setPreviewId(null);
    const handleUseTemplate = (id: string) => {
        // navigate to editor with layout query param
        const url = `/editor?layout=${encodeURIComponent(id)}`;
        window.location.href = url;
    };

    return (
        <DashboardLayout>
            <Container sx={{ py: 3, mt: 5 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link color="inherit" href="/dashboard">
                        Dashboard
                    </Link>
                    <Typography color="text.primary">Templates</Typography>
                </Breadcrumbs>

                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                    {/* <Box>
                        <Typography variant="h5" fontWeight={700}>
                            Choose a layout
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pick a professional layout and customize content in the editor.
                        </Typography>
                    </Box> */}

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, gap: 3, alignItems: 'center', mb: 4 }}>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 900, mb: 1 }}>
                                Beautiful resume templates — ready to customize
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                                Select a professionally designed layout and quickly populate it with your information. Clean, modern and optimized for recruiters.
                            </Typography>

                            <Stack direction="row" spacing={2} alignItems="center">
                                {/* <Button variant="contained" color="primary" onClick={() => (window.location.href = '/layout')}>Create New</Button>
                                <Button variant="outlined" onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}>Browse templates</Button> */}
                                <Chip label={`${templates.length} templates`} color="primary" />
                            </Stack>
                        </Box>

                        {/* <Box>
                            <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 6 }}>
                                <Box component="img" src={templates[1].thumbnail} alt="templates hero" sx={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
                            </Box>
                        </Box> */}
                    </Box>

                    {/* <Box>
                        <Chip label="3 templates" color="primary" />
                    </Box> */}
                </Box>

                <Grid container spacing={3}>
                    {templates.map((t) => (
                        <Grid item xs={12} sm={6} md={4} key={t.id}>
                            <LayoutCard
                                id={t.id}
                                name={t.name}
                                description={t.description}
                                thumbnail={t.thumbnail}
                                onPreview={handlePreview}
                                onUse={handleUseTemplate}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <TemplatePreview
                open={!!previewTemplate}
                onClose={handleClosePreview}
                template={previewTemplate}
                onUse={handleUseTemplate}
            />
        </DashboardLayout>
    );
}
