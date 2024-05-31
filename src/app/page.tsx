'use client';
import Image from "next/image"
import react from "../../public/assets/react.png"
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeConfig } from '@/componentes/config/theme';
import { useEffect, useState } from "react";

const drawerWidth = 0;

export default function Home() {
  const [data, setData] = useState <any[]>([])
  useEffect (()=>{
    async function listagemTemas() {
      try {
        const data = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Nivelamento", {
          method:"GET", 
          headers: {
            "x-api-key": "jOELi8SJTNSw0qVy",
            "Content-Type": "application/json"
          }
        })
        const imprimeData = await data.json()
        setData(imprimeData)
        console.log(imprimeData)
      } catch (error) {
        console.log(error)
      }
    }
    listagemTemas()
  } ,[])

  return (
    <main>
      <ThemeConfig>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" flexGrow={1} sx={{ cursor: "pointer" }}>
                Home
              </Typography>
              <Typography variant="h6" noWrap component="div" flexGrow={1} sx={{ cursor: "pointer" }}>
                Nivelamento
              </Typography>
              <Typography variant="h6" noWrap component="div" flexGrow={1} sx={{ cursor: "pointer" }}>
                AutoEstudo
              </Typography>
              <Typography variant="h6" noWrap component="div" flexGrow={1} sx={{ cursor: "pointer" }}>
                Feedback
              </Typography>

              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <div>
              {data.map((element, index) => ( 
                <div key={index}>
                  <CardContent>
                    <Typography variant="h5" component="div" color="black">
                     {element}
                    </Typography>
                    <Typography variant="body2" color="black">
                      11/02/2024
                    </Typography>

                    <Typography variant="body2" color="black">
                      Resume: Aula avançada de React.
                    </Typography>
                  </CardContent><Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <Image
                        width={300}
                        src={react}
                        alt="imagem filme" />
                    </CardActionArea>
                  </Card>
                </div>
              ))}
            </div>
            
          </Box>
        </Box>
      </ThemeConfig>
    </main>
  );
}
