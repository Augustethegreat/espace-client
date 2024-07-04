import { useState,useEffect } from 'react';
import head1 from "./img/head1.jpg"
import head2 from "./img/head2.jpg"
import head3 from "./img/head3.jpg"
import pic1 from "./img/pic1.png"
import pic2 from "./img/pic2.png"
import pic3 from "./img/pic3.png"
import pic4 from "./img/pic4.jpg"
import {ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import pic5 from "./img/pic5.jpg"
import pic6 from "./img/pic6.jpg"
import Image from 'next/image';


const images = [pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
  pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
];


const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  
   

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 140 ? 0 : prevIndex + 1));
      }, 8000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    return (
      <div className="overflow-hidden ">
       
          <div className='w-full '>
          <div className="carousel" 
          style={{ transform: `translateX(-${currentIndex * 100}%)`,transitionDuration:'1000',
          transitionTimingFunction:"ease-in-out" ,transitionProperty:'transform' }}  
          >
          {/* <img src={pic2.src} alt="" className='h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[330px] shadow-lg rounded-xl' />
          <img src={pic1.src} alt="" className='h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[330px] shadow-lg rounded-xl' />
          <img src={pic4.src} alt="" className='h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[330px] shadow-lg rounded-xl' /> */}

          {images.map((image, index) => (
            <img key={index} src={image.src} alt={`Slide ${index}`} className="h-auto mr-0 lg:mr-[4px] w-full md:w-[400px] lg:w-[301px] lg:h-[220px] lg:px-2 rounded-[10px]" />
          ))}
          
        </div>
          </div>
       <div className='md:max-w-screen-lg flex space-x-[80%] md:space-x-[85%] lg:space-x-[77%]'>
       <button
          className="absolute mt-[-35%] md:mt-[-130px]  bg-black bg-opacity-50 px-0 py-1 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="h-6 w-11 text-white " aria-hidden="true" />
        </button>
        <button
          className="absolute mt-[-35%] md:mt-[-130px]  bg-black bg-opacity-50 px-0 py-1 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-6 w-11 text-white " aria-hidden="true" />
        </button>
       </div>
      </div>
    );
  };
  
  export default Slideshow;