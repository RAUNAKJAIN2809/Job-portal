import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <HeroSection className="transition-transform transform hover:scale-105" />
        <CategoryCarousel className="my-10 transition-opacity duration-300 ease-in-out opacity-90 hover:opacity-100" />
        <LatestJobs className="py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white" />
      </main>
      <Footer className="bg-gray-800 text-white" />
    </div>
  );
}

export default Home;
