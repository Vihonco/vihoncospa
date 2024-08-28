import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import Cookies from 'js-cookie';
import imagen from '../../../assets/lgo.jpg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../Redux/Action/index'; // Importa la acción de register
import "./register.css"
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    identity: '',
    email: '',
    password: '',
    phone: '',
    adress: '',
    rol: 'user', // Valor por defecto para rol
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(register(formData));
      
      Cookies.set('session', response.data.token, { expires: 2 });
      navigate('/admin');
      
    } catch (error) {
      console.error('Error al registrar:', error.message);
    }
  };

  return (
    <Container component="main" maxWidth="sm" className="container-register">
      <div className="register-content">
        <div className="logo-contan">
          <img src={imagen} alt="Img Not Found" />
        </div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Apellido"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={14} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Cédula de Identidad"
                name="identity"
                value={formData.identity}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Dirección"
                name="adress"
                value={formData.adress}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className="submit-button">
            Registrarse
          </Button>
        </form>
      </div>
    </Container>
  );
}
