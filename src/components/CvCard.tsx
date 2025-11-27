import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function CvCard({ title, onEdit, onDelete, thumbnail }: any) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
        >
            <Card
                sx={{
                    height: "260px",
                    borderRadius: 4,
                    cursor: "pointer",
                    overflow: "hidden",
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            height: "160px",
                            background: "#F5F7FB",
                            borderRadius: 3,
                            mb: 2,
                            backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "top center",
                        }}
                    ></Box>

                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {title}
                    </Typography>

                    <Button size="small" sx={{ mt: 1, mr: 1 }} onClick={onEdit}>Edit</Button>
                    <Button size="small" sx={{ mt: 1 }} onClick={onDelete} color="error">Delete</Button>
                </CardContent>
            </Card>
        </motion.div>
    );
}
