import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Navigation, Car, Gift, X, Heart, Music, Clock } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const App = () => {


  const weddingDetails = {
    groom: "R. Sabarivasan, M.B.A.",
    bride: "R. Aishwarya, M.B.A.",
    date: "30th April 2026",
    muhurtham: "7:30 AM - 8:30 AM",
    reception: "29th April 2026, 7:00 PM onwards",
    venue: "Arignar Anna Arangam",
    address: "No. 14/29, Dr. Gurusamy Road, Chetpet, Chennai - 600031",
    coordinates: { lat: 13.0768, lng: 80.2415 },
    upiId: "mermaidangel1996@okicici",
    upiMobile: "7550058587"
  };


  const downloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:20260430T073000
DTEND:20260430T090000
SUMMARY:Wedding of Sabarivasan & Aishwarya
DESCRIPTION:Marriage Muhurtham
LOCATION:${weddingDetails.venue}, ${weddingDetails.address}
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding_invitation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#fffdd0] selection:bg-maroon selection:text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80") center/cover no-repeat' }}
      >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="glass p-12 rounded-3xl border-2 border-gold max-w-2xl mx-4"
        >
          <p className="text-maroon font-semibold tracking-widest uppercase mb-4">Marriage Invitation</p>
          <h1 className="text-5xl md:text-7xl mb-4 font-bold text-maroon">{weddingDetails.groom}</h1>
          <p className="script-font text-4xl text-gold pb-4 animate-pulse">&</p>
          <h1 className="text-5xl md:text-7xl mb-8 font-bold text-maroon">{weddingDetails.bride}</h1>
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-serif italic text-text-dark">{weddingDetails.date}</span>
            <div className="w-24 h-1 bg-gold rounded-full my-2"></div>
            <span className="text-lg font-semibold text-text-light uppercase tracking-tighter">{weddingDetails.venue}</span>
            <p className="text-sm text-text-light mt-1 font-medium">{weddingDetails.address}</p>
          </div>
        </motion.div>
        

      </motion.section>

      {/* Details Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="card border-l-8 border-gold">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gold-light p-3 rounded-full">
                  <Music className="text-gold w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-maroon">Reception</h3>
              </div>
              <p className="text-xl text-text-light mb-2">{weddingDetails.reception}</p>
              <p className="text-text-dark font-semibold">Join us for a night of music and celebration!</p>
            </div>

            <div className="card border-l-8 border-maroon">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                  <Heart className="text-maroon w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-maroon">Muhurtham</h3>
              </div>
              <p className="text-xl text-text-light mb-2">{weddingDetails.muhurtham}</p>
              <p className="text-text-dark font-semibold">The auspicious moment of union.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Buttons */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="text-4xl font-bold text-maroon mb-12">Plan Your Visit</h2>
          <div className="button-container">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadICS}
              className="btn btn-maroon shadow-lg"
            >
              <Calendar className="w-5 h-5" /> Add to Calendar
            </motion.button>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(weddingDetails.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold shadow-lg"
            >
              <Navigation className="w-5 h-5" /> Get Directions
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://book.olacabs.com/?drop_lat=${weddingDetails.coordinates.lat}&drop_lng=${weddingDetails.coordinates.lng}&drop_name=${encodeURIComponent(weddingDetails.venue)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ola shadow-lg"
            >
              <Car className="w-5 h-5" /> Book Ola
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=${weddingDetails.coordinates.lat}&dropoff[longitude]=${weddingDetails.coordinates.lng}&dropoff[nickname]=${encodeURIComponent(weddingDetails.venue)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-uber shadow-lg"
            >
              <Car className="w-5 h-5" /> Book Uber
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919789955413"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg> 
              Wish Sabarivasan
            </motion.a>
          </div>
        </div>
      </section>
      {/* Photo Gallery Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-maroon mb-8">Photo Gallery</h2>
          <div className="button-container">
            <motion.a 
              href="https://youtu.be/m0GZf6zmwek?si=fN7yzKS3j_GPUkjb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-maroon shadow-md"
              style={{ justifyContent: 'center' }}
            >
              Engagement
            </motion.a>
            <motion.button 
              onClick={() => alert('(Will be available soon)')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-gold shadow-md"
              style={{ justifyContent: 'center' }}
            >
              Pre-Wedding
            </motion.button>
            <motion.button 
              onClick={() => alert('(Will be available soon)')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-maroon shadow-md"
              style={{ justifyContent: 'center' }}
            >
              Wedding
            </motion.button>
            <motion.button 
              onClick={() => alert('(Will be available soon)')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-gold shadow-md"
              style={{ justifyContent: 'center' }}
            >
              Marriage
            </motion.button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer bg-maroon text-white p-12 text-center">
        <p className="script-font text-3xl mb-4">With Love,</p>
        <p className="text-xl font-bold mb-2">K. Raghu & G. Devaki Raghu</p>
        <p className="text-xl font-bold mb-8">S. Praveen & R. Aishwariya</p>
        <div className="w-16 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
        <p className="text-opacity-70 text-sm">© 2026 Sabarivasan & Aishwarya Wedding</p>
      </footer>
    </div>
  );
};

export default App;
