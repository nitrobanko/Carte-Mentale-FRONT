import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const PageEvent: React.FC = () => {
  const eventDetails = {
    title: 'Événement Caritatif',
    subtitle: 'Aidez-nous à rendre le monde meilleur',
    description: 'Joignez-vous à nous pour un événement caritatif visant à collecter des fonds pour les enfants dans le besoin. Votre présence et votre soutien peuvent faire une grande différence.',
    address: '123 Rue de la Bienfaisance, 75008 Paris, France',
    date: '25 Juin 2024',
    time: '18:00 - 21:00',
    duration: '3 heures',
    maxParticipants: 100,
    ageGroup: '18-35 ans',
    professionalStatus: 'Étudiants et Professionnels',
    eventType: 'Conférence',
    theme: 'Éducation et Aide Humanitaire',
    format: 'Présentiel',
    registrationLink: 'https://example.com/register'
  };

  const images = [
    'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  ];

  const prescripteurs = [
    {
      name: 'Jane Smith',
      avatarUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400'
    },
    {
      name: 'Alex Johnson',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400'
    },
    {
      name: 'Emily Davis',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400'
    },
  ];

  const cardAnimation = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  const handleSave = () => {
    // Handle save logic
    toast.success('Event saved successfully!');
  };

  const handleCancel = () => {
    // Handle cancel logic
    toast.info('Event creation canceled.');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{
        flexGrow: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #0070f3, #009999, #00bcd4)',
        padding: 4,
      }}>
        <Box sx={{ width: '100%', maxWidth: 1200, bgcolor: '#fff', boxShadow: 3, borderRadius: 3, p: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography level="title-md">Événement</Typography>
              <Typography level="body-sm">
                Ajoutez vos événements dans la partie ci-dessous.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Card>
                <Box sx={{ mb: 1 }}>
                  <Typography level="title-md">Détails de l'événement</Typography>
                </Box>
                <Divider />
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="Nom de l'événement" />
                </FormControl>
                <Stack spacing={2} sx={{ my: 1 }}>
                  <Textarea
                    size="sm"
                    minRows={4}
                    sx={{ mt: 1.5 }}
                    defaultValue="Écrivez ici..."
                  />
                  <FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
                    275 characters left
                  </FormHelperText>
                </Stack>
                <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                  <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                    <Button size="sm" variant="outlined" color="neutral" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button size="sm" variant="solid" onClick={handleSave}>
                      Save
                    </Button>
                  </CardActions>
                </CardOverflow>
              </Card>
              <Card>
                <Box sx={{ mt: 4 }}>
                  <Typography  gutterBottom>
                    Galerie d'images
                  </Typography>
                  <ImageList sx={{ width: '100%', height: 250 }} cols={3} rowHeight={164}>
                    {images.map((image, index) => (
                      <ImageListItem key={index}>
                        <img
                          src={`${image}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={`Gallery image ${index + 1}`}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              </Card>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography >Date & Heure</Typography>
                  <Typography >{eventDetails.date} à {eventDetails.time}</Typography>
                  <Typography >Durée: {eventDetails.duration}</Typography>
                  <Typography >Participants max: {eventDetails.maxParticipants}</Typography>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography >Tranche d'âge et Statut professionnel</Typography>
                  <Typography >Âge: {eventDetails.ageGroup}</Typography>
                  <Typography >Statut: {eventDetails.professionalStatus}</Typography>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography >Détails de l'événement</Typography>
                  <Typography >Type: {eventDetails.eventType}</Typography>
                  <Typography >Thème: {eventDetails.theme}</Typography>
                  <Typography >Format: {eventDetails.format}</Typography>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: 3, mb: 2 }}>
                <CardContent>
                  <Typography >Inscription</Typography>
                  <motion.div whileTap={cardAnimation}>
                    <Button
                      variant="solid"
                      color="danger"
                      href={eventDetails.registrationLink}
                      target="_blank"
                    >
                      Inscription à l'événement
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 1200, bgcolor: '#fff', boxShadow: 3, borderRadius: 3, p: 4, mt: 4, display: 'flex', gap: 4 }}>
          <Card sx={{ flex: 1, boxShadow: 3 }}>
            <CardContent>
              <Typography >Projet</Typography>
              <Typography >Détails sur le projet en cours...</Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1, boxShadow: 3 }}>
            <CardContent>
              <Typography >Prescripteurs</Typography>
              <Grid container spacing={2}>
                {prescripteurs.map((prescripteur, index) => (
                  <Grid item xs={4} key={index}>
                    <Avatar alt={prescripteur.name} src={prescripteur.avatarUrl} variant="square" sx={{ width: 70, height: 70, borderRadius: '8px', mt: 1, boxShadow: 3 }} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default PageEvent;