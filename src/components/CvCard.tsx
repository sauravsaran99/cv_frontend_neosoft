import { Box, Card, CardContent, Typography, IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { motion } from "framer-motion";

export default function CvCard({ title, onEdit, onDelete, thumbnail, subtitle }: any) {
    const placeholder = 'https://picsum.photos/seed/cvthumb/800/600';
    return (
        <motion.div
            whileHover={{ translateY: -6 }}
            transition={{ duration: 0.25 }}
        >
            <Card
                sx={{
                    height: '260px',
                    borderRadius: 3,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    boxShadow: 1,
                    transition: 'box-shadow 200ms, transform 200ms',
                    '&:hover': { boxShadow: 6 }
                }}
            >
                <CardContent sx={{ p: 2.25 }}>
                    <Box
                        sx={{
                            height: '150px',
                            borderRadius: 2,
                            mb: 2,
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.02)), url(${thumbnail || placeholder})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        className="cv-thumb"
                    >
                        <Box
                            className="cv-overlay"
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-end',
                                p: 1,
                                gap: 1,
                                opacity: 0,
                                transition: 'opacity 160ms ease',
                                '& .MuiIconButton-root': { boxShadow: 2 }
                            }}
                        >
                            <Tooltip title="Preview" arrow>
                                <IconButton
                                    size="small"
                                    onClick={(e) => { e.stopPropagation(); window.open(thumbnail || placeholder, '_blank'); }}
                                    sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'text.primary', '&:hover': { bgcolor: 'white' } }}
                                >
                                    <VisibilityIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Edit" arrow>
                                <IconButton
                                    size="small"
                                    onClick={(e) => { e.stopPropagation(); onEdit && onEdit(); }}
                                    sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', '&:hover': { bgcolor: 'primary.dark' } }}
                                >
                                    <EditIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete" arrow>
                                <IconButton
                                    size="small"
                                    onClick={(e) => { e.stopPropagation(); onDelete && onDelete(); }}
                                    sx={{ bgcolor: 'rgba(244,67,54,0.09)', color: 'error.main', '&:hover': { bgcolor: 'rgba(244,67,54,0.14)' } }}
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.2px' }}>
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                            {subtitle}
                        </Typography>
                    )}
                </CardContent>
            </Card>
            <style>{`.cv-thumb:hover .cv-overlay{ opacity: 1; }`}</style>
        </motion.div>
    );
}
