/* ===========================
   BASE DE DATOS DE EJERCICIOS
=========================== */
const exerciseDatabase = {
  piernas_general: [
    { name: "Aductores Sentado", videoId: "https://drive.google.com/file/d/1Xfs-vaGua4Nn0mW--xZh8y5dgd6cD_rb/view?usp=drivesdk", description: "Aislamiento puro de la parte interna del muslo. El foco está en los aductores, llevándolos a un estiramiento amplio antes de contraer fuerte en el cierre. Fundamental para dar densidad y fuerza en la zona media de las piernas." },
    { name: "Buenos Días en Smith", videoId: "https://drive.google.com/file/d/1NrKBja118-ToX05Ocs6VkAn8z8UKG73J/view?usp=drivesdk", description: "Movimiento de bisagra guiado, con seguridad para cargar fuerte. Prioriza el trabajo de isquiotibiales y glúteos, con apoyo de la espalda baja. Ideal para enfocarse en el estiramiento profundo de femorales sin preocuparse por la estabilidad." },
    { name: "Buenos Días", videoId: "https://drive.google.com/file/d/1VAWnHjTmp-EW7v_37kv8G_v4oDMueuZ2/view?usp=drivesdk", description: "Versión libre que exige mayor control técnico. Enfatiza la cadena posterior completa: isquiotibiales, glúteos y erectores espinales. Potente para ganar fuerza y grosor en femorales al aprovechar el estiramiento al máximo." },
    { name: "Escalera Mecánica", videoId: "https://drive.google.com/file/d/1-KDVoR0MztijwMCgCJ1qfbcK_NjNvnWj/view?usp=drivesdk", description: "Trabajo continuo que combina cardio con hipertrofia. El estímulo recae en glúteos, cuádriceps y gemelos, manteniendo tensión constante y volumen extra sin impacto." },
    { name: "Prensa", videoId: "https://drive.google.com/file/d/1O-YMrJVc7pndxpuATZbXboeulDQ5kxS0/view?usp=drivesdk", description: "Ejercicio base de pierna para aplicar cargas altas. Enfocado principalmente en cuádriceps, con fuerte participación de glúteos y femorales según la colocación de los pies. Permite trabajar seguro en rangos pesados, con recorrido profundo para estimular al máximo." },
    { name: "Sentadilla Búlgara con Barra", videoId: "https://drive.google.com/file/d/1bcNRv0NWafCWN4fOvb0hzJLBpMw4qwwf/view?usp=drivesdk", description: "Unilateral avanzado para desarrollar fuerza, masa y corregir desbalances. Carga directa en cuádriceps y glúteos, con isquiotibiales como soporte. Al ser con barra, permite progresar en pesos altos y llevar cada pierna a un esfuerzo total." },
    { name: "Sentadilla Búlgara con Mancuernas", videoId: "https://drive.google.com/file/d/1VkcnF9SA-YNYQazHOPzGiGZGWPawJ6Od/view?usp=drivesdk", description: "Variante accesible que mantiene el mismo estímulo unilateral. Enfocada en cuádriceps y glúteos, permite mayor control del movimiento y es excelente para trabajar al fallo con seguridad." },
    { name: "Sentadilla Búlgara en Smith", videoId: "https://drive.google.com/file/d/1GKxgnnkTyBZoxVCy4ynY1VgpomFN0Xfu/view?usp=drivesdk", description: "Opción guiada que suma estabilidad y control, sin perder el estímulo intenso sobre cuádriceps y glúteos. Permite bajar profundo, cargar más y enfocarse en la contracción sin preocuparse por el equilibrio." },
    { name: "Sentadillas con Barra", videoId: "https://drive.google.com/file/d/1JJjXOHws6I_5XXMLgyTenU_tdDynfhiY/view?usp=drivesdk", description: "El rey de los ejercicios de pierna. Trabaja todo: cuádriceps, glúteos, femorales y core. La clave está en bajar profundo, priorizando el estiramiento muscular y subir explosivo. Es el ejercicio más completo para construir masa y fuerza." },
    { name: "Tracción con Barra en Rack", videoId: "https://drive.google.com/file/d/1c0rJzJ3VDuIqTh1rJLIEHUkSovgeLBfn/view?usp=drivesdk", description: "Ejercicio de tirón que fortalece la parte alta de la cadena posterior. Estimula principalmente dorsales y trapecios, con soporte de core y erectores. Perfecto para sumar grosor y mejorar la postura general." }
  ],
  cuadriceps: [
    { name: "Estocadas Caminando con Mancuernas", videoId: "1lq4UD_oqMliGlhKZ9t660RVQS4C-pvYI", description: "Ejercicio dinámico que trabaja cuádriceps, glúteos y estabilidad. Camina hacia adelante alternando piernas." },
    { name: "Estocadas con Barra", videoId: "1dLEdj1RnS4MjDJPkeNe-JWIBsmB6yeS2", description: "Estocadas estáticas con barra en la espalda. Excelente para fuerza y masa muscular en cuádriceps." },
    { name: "Estocadas en Cajón con Barra", videoId: "1EY6HibAVLeP8YjrghGgMpJvRwp-gZFo2", description: "Variante elevada que aumenta el rango de movimiento y la activación del cuádriceps." },
    { name: "Estocadas en Smith", videoId: "1dlBtABwW52_JcOt0U_H-308HrKYT85PD", description: "Estocadas en máquina Smith para mayor estabilidad y control del movimiento." },
    { name: "Estocadas Hacia Atrás con Mancuernas", videoId: "19XjPqTcYstRyQx54wfJBpqBkhTuKUxP8", description: "Estocadas inversas que enfatizan el cuádriceps y reducen el estrés en las rodillas." },
    { name: "Extensión de Cuádriceps Sentado", videoId: "1T8t9ijRwlMtma4bOkoJh3aOiy5nxEzoJ", description: "Ejercicio de aislamiento para cuádriceps en máquina. Ideal para definición muscular." },
    { name: "Sentadillas en Hack", videoId: "1hSkUvjYajDfj8H2aMbIjHEef8v7nP6DP", description: "Sentadillas en máquina hack que permite cargar más peso con mayor seguridad." },
    { name: "Sentadillas en Smith", videoId: "1WQPQoAHSwoyHccV5u-OP1e1p7MhEX5_E", description: "Sentadillas en máquina Smith para principiantes o entrenamiento con mayor control." },
    { name: "Sentadillas Frontales", videoId: "", description: "Variante con barra al frente que enfatiza más el cuádriceps y mejora la postura." },
    { name: "Sentadillas Búlgaras", videoId: "", description: "Sentadillas unilaterales con pie trasero elevado. Excelente para equilibrio y fuerza." },
    { name: "Prensa de Piernas", videoId: "", description: "Ejercicio en máquina que permite trabajar con cargas altas de forma segura." },
    { name: "Sentadillas Goblet", videoId: "", description: "Sentadillas con mancuerna al pecho. Ideal para aprender la técnica correcta." }
  ],
  gluteos: [
    { name: "Hip Thrust con Barra", videoId: "1ijW2ft50ijZHSYpeHHucUNmt_f7WPz9I", description: "El mejor ejercicio para activar y desarrollar los glúteos. Movimiento de extensión de cadera." },
    { name: "Hip Thrust en Smith", videoId: "1mcMH-_YV4T6eGWYM9UNNF5p7_7a7odeX", description: "Hip thrust en máquina Smith para mayor estabilidad y control del peso." },
    { name: "Hiperextensión 45 Grados Glúteos", videoId: "1fcOHHb6YXseRaX915WdGt63f_hCpNd9F", description: "Hiperextensiones enfocadas en glúteos con técnica específica para máxima activación." },
    { name: "Sentadillas Sumo con Barra", videoId: "1gKxoZqdESY6vpSnIvvZKjN1a1agdJAci", description: "Sentadillas con stance amplio que enfatiza glúteos y aductores." },
  ],
  isquiotibiales: [
    { name: "Isquiotibiales Acostado", videoId: "1odYrViuAw6cmLfBHLcdmXf9ZCwFArVn5", description: "Curl de isquiotibiales en máquina acostado. Ejercicio de aislamiento efectivo." },
    { name: "Isquiotibiales Sentado", videoId: "1zAQmYSac4XFv5XI6Q8XT8PM62uAWCktk", description: "Curl de isquiotibiales en posición sentada. Variante que cambia el ángulo de trabajo." },
    { name: "Peso Muerto Convencional", videoId: "1aPLT_cpIJsnW3ECUt4SuMFcbmq_uf-Em", description: "Ejercicio fundamental que trabaja toda la cadena posterior: isquios, glúteos y espalda." },
    { name: "Peso Muerto en Smith", videoId: "1c4Jo6YVM9U3fnX3h3Sd5XF0Khz5czfFg", description: "Peso muerto en máquina Smith para mayor control y seguridad." },
    { name: "Peso Muerto Rumano con Mancuernas", videoId: "1q6qQz9xBcp4flUc56_NFAAXLHT--QjJl", description: "Variante con mancuernas que enfatiza el estiramiento de isquiotibiales." },
    { name: "Peso Muerto Rumano con Barra", videoId: "1-js5MRBFdvc0_ndj-JcGQvvshafVfkML", description: "Peso muerto rumano clásico. Excelente para isquiotibiales y glúteos." },
    { name: "Peso Muerto Sumo", videoId: "1VwAWOXxQ8yKTP1pH3F_4Lz0wA7DqxxVR", description: "Variante sumo que permite levantar más peso y enfatiza glúteos." },
    { name: "Peso Muerto Unilateral con Mancuerna", videoId: "1GIX9pgMkaB2dJ4m_kxutVxeZ8U5aHl25", description: "Peso muerto a una pierna que mejora equilibrio y trabaja isquios unilateralmente." },
  ],
  pantorrillas: [
    { name: "Gemelos de Pie en Máquina", videoId: "1aQETMdpISa2jkX-xavke3vrNxDkLNWsS", description: "Ejercicio clásico para gemelos en máquina específica. Permite cargas altas." },
    { name: "Gemelos de Pie en Smith", videoId: "18cuDm9I82ayxF4hSlcQpaQr45T77M3gn", description: "Elevaciones de gemelos usando la máquina Smith para estabilidad." },
    { name: "Gemelos en Prensa", videoId: "1RkueB6PvBvuPz_RGfh3Hl70qWxGvqi_L", description: "Gemelos en máquina de prensa. Variante cómoda y efectiva." },
    { name: "Sóleo Sentado con Mancuerna Unilateral", videoId: "1XV-CutHJNkqvY7fSJaMLfKvlHUe2EMqY", description: "Trabajo unilateral del sóleo con mancuerna. Permite corregir desequilibrios." },
    { name: "Sóleo Sentado en Máquina", videoId: "1J7hUeQvPKwawBx0jLgWB5hfuM8DJKK21", description: "Ejercicio específico para el músculo sóleo en máquina sentado." },
    { name: "Sóleo Sentado con Mancuernas", videoId: "1qNB7Mbho6e87D3JqxBXzrjIKM8RgcfTQ", description: "Trabajo del sóleo con mancuernas en posición sentada." },
  ],
  pectorales: [
    { name: "Aperturas de Pie con Poleas", videoId: "1fLxLI_G-HX7ycMpe_UxqZAbP-_zukIYd", description: "Aperturas de pie en polea que permiten trabajar el pecho desde un ángulo único con resistencia constante." },
    { name: "Aperturas en Banca con Mancuernas", videoId: "1E-JiJTMYmlhlrBiRUPclwET4GjjtKtEG", description: "Ejercicio clásico de aislamiento para pectorales. Proporciona un estiramiento profundo y contracción intensa." },
    { name: "Aperturas en Banca Inclinado con Mancuernas", videoId: "1sd75Zvm2X9dhb0RwCsUMRVloZIg6uRbG", description: "Aperturas inclinadas que enfatizan la porción superior del pectoral con mayor estiramiento." },
    { name: "Aperturas Sentado en Máquina", videoId: "1iBzZBR_Hm5lJJb2X_i8XOTdUePS3gGoM", description: "Aperturas en máquina que proporcionan un movimiento guiado y seguro para el aislamiento del pecho." },
    { name: "Flexiones BB Amplias (Pecho)", videoId: "1NS075GrkodFk4sNNy2uNZFJgHTPvjcWh", description: "Flexiones con agarre amplio que enfatizan el trabajo de los pectorales sobre tríceps." },
    { name: "Flexiones BB con Rodillas Apoyadas", videoId: "11_NOPs-spDqtlbvosMbgEIUl2gLLSDTk", description: "Variante modificada de flexiones ideal para principiantes o cuando se busca menor intensidad." },
    { name: "Flexiones BB Declinado", videoId: "1kPXVZvhTC1iG31uM7roy6N7_FTlnSD5i", description: "Flexiones con pies elevados que aumentan la dificultad y enfatizan la porción superior del pecho." },
    { name: "Flexiones BB Inclinado", videoId: "1JHa8aWpRj6Xb-yvFFunIfVD02y7Z5OQr", description: "Flexiones con manos elevadas que reducen la dificultad y son ideales para principiantes." },
    { name: "Flexiones BB Profundas", videoId: "1Rh3w4gsBNZiW1t_MlBjn0Ts7qmy-BdR2", description: "Flexiones con mayor rango de movimiento que proporcionan un estiramiento más profundo del pecho." },
    { name: "Flexiones BB", videoId: "1v17dS875CBZJTn2g3BmrN1kr1UiTZhRx", description: "Flexiones clásicas con peso corporal. Ejercicio fundamental y versátil para desarrollo del pecho." },
    { name: "Fondos para Pecho", videoId: "1DoDvxFJxur603NTiaqNY6tLo1Xf0azMz", description: "Fondos en paralelas enfocados en pectorales. Excelente ejercicio con peso corporal para masa y fuerza." },
    { name: "Fondos Sentado en Máquina", videoId: "14vrZVe2Jv0psm3O7oot-tmpJ-I5rcW01", description: "Fondos en máquina sentado que proporcionan soporte y control del movimiento para mayor seguridad." },
    { name: "Peck Deck", videoId: "1Id235vxbnHTg9FirBqaK3UoGo-7YIF-v", description: "Ejercicio en máquina peck deck que aísla perfectamente los pectorales con movimiento guiado." },
    { name: "Press Banca con Mancuernas", videoId: "1t8WpW9earph-8i_7R3apxC8laS9cjAsd", description: "Press de banca con mancuernas que permite mayor rango de movimiento y trabajo independiente de cada brazo." },
    { name: "Press Banca en Smith", videoId: "10Ow9-8p-hG2JDbRVYF4wfAmQNWra3_53", description: "Press de banca en máquina Smith que proporciona mayor estabilidad y seguridad durante el ejercicio." },
    { name: "Press Banca Inclinado con Mancuernas", videoId: "12NqNrFdHV3C2pZop4CSocxjW18UAEQip", description: "Press inclinado con mancuernas que enfatiza la porción superior del pectoral con mayor libertad de movimiento." },
    { name: "Press Banca Inclinado en Smith", videoId: "1dniWxfrI77S5zUw0vtOGpISbyifiF4Eh", description: "Press inclinado en máquina Smith que combina los beneficios del ángulo inclinado con la estabilidad de la máquina." },
    { name: "Press Banca Inclinado", videoId: "1x7VwrtJ-l9ZuQjx5bOzC3VDn-PaBnz5l", description: "Press de banca inclinado clásico con barra que desarrolla la porción superior del pectoral." },
    { name: "Press Banca", videoId: "1C5XkxyDmjH3FmhAucPBrXT9EzY4_pVy4", description: "El ejercicio rey para pectorales. Press de banca clásico que desarrolla fuerza y masa muscular." },
    { name: "Press de Pecho en Máquina con Discos", videoId: "1-2WvTtJ9Rcp84JA-WiV9RxowNBqW7kOd", description: "Press de pecho en máquina con carga de discos que permite ajustar el peso de forma precisa." },
    { name: "Press de Pecho en Máquina", videoId: "1QadKUn1fZcpZjJUajfcxMR2lsKIrMhS", description: "Press de pecho en máquina que proporciona un movimiento guiado y seguro para todos los niveles." },
    { name: "Press de Pecho Inclinado en Máquina con Discos", videoId: "1e0QWbSnb4TfNX2nn8bzzeIQR1FxkLHdx", description: "Press inclinado en máquina con discos que combina el ángulo inclinado con la precisión de carga." },
    { name: "Press Martillo Acostado con Mancuernas", videoId: "1YvjiQlolKpKn3DQ8RY2REs56zhyr4Twj", description: "Press con agarre neutro (martillo) que reduce el estrés en hombros y enfatiza diferentes fibras del pecho." }
  ],
  espalda: [
    { name: "Remo Unilateral Sentado en Máquina con Polea (Dorsal Ancho)", videoId: "1TapO4YcmeyxhmIyaGs0kPi7iHKnHN-xI", description: "Remo unilateral en máquina con polea que permite trabajar cada lado del dorsal ancho independientemente con control total." },
    { name: "Remo Unilateral Sentado en Máquina (Dorsal Ancho)", videoId: "1pMsH33QgweJUDgynCPvgMevlE4f4UlJw", description: "Ejercicio unilateral en máquina específica para dorsal ancho. Permite corregir desequilibrios y máxima concentración." },
    { name: "Remo Unilateral Sentado en Máquina (Dorsal Ancho) - Variable", videoId: "1gEY-UOwUdB7cFM_aU3CtuL0NDJpuso6t", description: "Variante del remo unilateral que cambia el ángulo de trabajo para estimular diferentes fibras del dorsal." },
    { name: "Remo T", videoId: "19TWPpxpMD8qJ0Z2ovLG58bYMBLpJJyHX", description: "Remo en T clásico que permite cargas altas y trabaja intensamente el grosor de la espalda media." },
    { name: "Remo T con Barra con Triángulo", videoId: "1Nt1T0egiLZZF9JzDE-GEQtOv7qnhBVUd", description: "Remo en T usando agarre triangular que cambia el ángulo de tracción y enfatiza diferentes músculos." },
    { name: "Remo Sentado en Máquina con Triángulo", videoId: "1ZRSL08FmAobvV-1Sc8cqeHROAtG8uqSM", description: "Remo sentado con agarre triangular que proporciona un agarre neutro cómodo y efectivo." },
    { name: "Remo Sentado en Máquina con Triángulo con Extensión", videoId: "1hCTmAyEyiVO50e3U1TXvKIKN3pNId0t5", description: "Variante del remo con triángulo que incluye extensión completa para mayor rango de movimiento." },
    { name: "Remo Sentado en Máquina con Barra", videoId: "1PstNT8ld0l27DpMmzmjWF9kahy9LVBn9", description: "Remo sentado clásico con barra que trabaja toda la musculatura de la espalda de forma simétrica." },
    { name: "Remo Sentado en Máquina con Barra Amplio", videoId: "1OAca-JvfUFn51UnT9epeaXizZDaQDOEq", description: "Remo con agarre amplio que enfatiza el trabajo de los romboides y la parte media de los trapecios." },
    { name: "Remo Sentado en Máquina (Dorsal Ancho)", videoId: "1hqAhEMbH2G-Xfn5bsXqxPu1WG3RQ3xnt", description: "Remo sentado específico para dorsal ancho que permite un desarrollo completo de la anchura de la espalda." },
    { name: "Remo Sentado en Máquina (Dorsal Alto)", videoId: "1QzzypvxXwE-4nrbAMWLkcqVLkr3m8yUo", description: "Remo que trabaja la porción superior del dorsal y los músculos de la espalda alta." },
    { name: "Remo en Smith", videoId: "1ICPAVxs1pevnuLMTmjgWExayuBfsqy5k", description: "Remo realizado en máquina Smith que proporciona estabilidad y permite concentrarse en la técnica." },
    { name: "Remo con Mancuernas", videoId: "1WAy4wReyFIY5saZb00fcSBi1WnjM-ART", description: "Remo bilateral con mancuernas que permite mayor rango de movimiento y trabajo independiente de cada brazo." },
    { name: "Remo con Mancuernas con Apoyo", videoId: "1zTI6gdMFtbtEhVcYou-HTEvc17gTq3PM", description: "Remo con mancuernas usando apoyo para mayor estabilidad y aislamiento del movimiento." },
    { name: "Remo con Mancuerna Unilateral", videoId: "1JaFW-_Xi-eNE1_bwiYecHvLBoy4G3d74", description: "Remo unilateral con mancuerna que permite trabajar cada lado independientemente y corregir desequilibrios." },
    { name: "Remo con Barra", videoId: "1GFhUX_VLBPjeAsr8T-TbI1rLogGrO58u", description: "Remo clásico con barra libre. Ejercicio fundamental para desarrollar fuerza y masa en toda la espalda." },
    { name: "Polea al Pecho Supino", videoId: "1_jw9RDcRWhuD5pKTeq626WUZJL6-9sb8", description: "Jalón al pecho con agarre supino que enfatiza el trabajo de bíceps y la porción inferior del dorsal." },
    { name: "Polea al Pecho Prono", videoId: "1I4w_4RUem3aIEV0PS0dmelWbfr10tz2J", description: "Jalón al pecho con agarre prono clásico. Excelente para desarrollar la anchura de la espalda." },
    { name: "Polea al Pecho Prono Cerrado", videoId: "1gTDO_Q3MfhgGkK41ey2iaV3eDBT2ekHW", description: "Jalón con agarre prono cerrado que cambia el ángulo de tracción y enfatiza diferentes fibras musculares." },
    { name: "Polea al Pecho Prono Abierto", videoId: "1m8LAuVpQqtKJB9fTKZV1N9pxqb6hj5t3", description: "Jalón con agarre prono amplio que maximiza el trabajo del dorsal ancho y crea anchura." },
    { name: "Polea al Pecho con Triángulo", videoId: "1k4qwHp5eBLKBmDEwvnp-Mj_vNlIotT1n", description: "Jalón al pecho usando agarre triangular que proporciona un agarre neutro y cómodo." },
    { name: "Jalón al Pecho en Máquina", videoId: "1ZF9yr2BP0yphb1VyE31GFBiI4JZE4BlS", description: "Jalón al pecho en máquina específica que guía el movimiento y permite mayor control." },
    { name: "Hiperextensión de 45° (Lumbares)", videoId: "19I2YycnYqdh3z13mHaiL0M1OrnzGke-E", description: "Hiperextensiones a 45 grados específicas para fortalecer los músculos lumbares y la espalda baja." },
    { name: "Espalda con Polea", videoId: "1VF3vmqB2a77neHRa5LzeK2QsCiIUSOZK", description: "Ejercicio general de espalda en polea que permite trabajar desde diferentes ángulos." },
    { name: "Encogimientos con Mancuernas (Trapecios) 25° hacia Adelante", videoId: "1UyFUZjKcd0uQTY7ClyLW0WJwFfFrDnAe", description: "Encogimientos con mancuernas con inclinación hacia adelante que maximiza la activación de los trapecios." },
    { name: "Encogimientos con Barra (Trapecios) 25° hacia Adelante", videoId: "1iv4uVOVyUJnv4S1TbVX4bXxL_Z0FcpI-", description: "Encogimientos con barra inclinados hacia adelante para desarrollo completo de los músculos trapecios." },
    { name: "Dominadas Agarre Supino", videoId: "1REN0E_arkYRaRmUbe-ERu4M28NPv6DrS", description: "Dominadas con agarre supino que enfatizan el trabajo de bíceps y la porción inferior del dorsal." },
    { name: "Dominadas Agarre Prono", videoId: "1avpp8w_3ezj1jgvDN1sMlOz6K0zRYQj2", description: "Dominadas clásicas con agarre prono. El ejercicio rey para desarrollar fuerza y anchura en la espalda." },
    { name: "Dominadas Agarre Prono a los Hombros", videoId: "1-u7-bzaIqkWk0mfuu8o_9RZzuCi8czj5", description: "Dominadas con agarre prono llevando la barra hasta los hombros para mayor activación muscular." },
  ],
  hombros: [
    { name: "Flexiones BB para Hombros", videoId: "1K3oB3zyC1Y2BTgTWwM6DdOajZVWL9e5i", description: "Flexiones específicas para hombros con peso corporal. Desarrolla fuerza funcional y estabilidad en los deltoides." },
    { name: "Flexiones para Hombros con Banco", videoId: "1KjX4Xa17RVuHZG2pko3c5ODI1Ot75pWk", description: "Flexiones elevadas en banco que aumentan la dificultad y el rango de movimiento para los hombros." },
    { name: "Press Militar con Barra Sentado", videoId: "13Xoe4OXLNYMm8ZRF1sVtgKf80of6fTep", description: "Press militar sentado con barra que proporciona estabilidad y permite concentrarse en el desarrollo de los deltoides." },
    { name: "Press Militar con Mancuernas de Pie", videoId: "1VhY-L8rgmbfv7TxEs_Bn2U0q1PsIPwoW", description: "Press militar de pie con mancuernas que requiere mayor estabilidad del core y permite trabajo independiente de cada brazo." },
    { name: "Press Militar con Mancuernas Sentado", videoId: "1nUYwoKsxFQLWHm7Lu1N0SgrMFpbT-DNJ", description: "Press militar sentado con mancuernas que elimina la ayuda del core y permite mayor concentración en los hombros." },
    { name: "Press Militar en Máquina", videoId: "1PnXpxF_0cci70f1tsAiMUTlB5NM0BUHJ", description: "Press militar en máquina que guía el movimiento y proporciona mayor seguridad para principiantes." },
    { name: "Press Militar en Smith", videoId: "1nbeiWcNuPl_Qq_6oxXyG-v6Gyh3RQWTt", description: "Press militar en máquina Smith que combina la estabilidad de la máquina con el movimiento de peso libre." },
    { name: "Remo para Deltoides Posteriores", videoId: "1MykqH_KvQNy_fqHqCSd_95N66HVgja_0", description: "Remo específico para deltoides posteriores que mejora la postura y equilibra el desarrollo del hombro." },
    { name: "Vuelos Laterales con Mancuernas Sentado", videoId: "1Ky7KRDz70QwlwGcNckTx_X7ZutKzhUAx", description: "Elevaciones laterales sentado que eliminan el impulso del cuerpo y aíslan el deltoides medio." },
    { name: "Vuelos Laterales con Mancuernas", videoId: "1VOWKx6lrXlV5aaz9-kT7BA_P9Qkuq4Bf", description: "Elevaciones laterales clásicas de pie. Ejercicio fundamental para desarrollar la anchura de los hombros." },
    { name: "Vuelos Laterales en Máquina", videoId: "1wvqNCBO8pew6a0vz3FvZ7TWsfQgDWhmo", description: "Elevaciones laterales en máquina que proporcionan un movimiento guiado y resistencia constante." },
    { name: "Vuelos Posteriores con Mancuerna con Apoyo", videoId: "1b9QzfTJC-qbzhwTA02g035Z4SaCIhExZ", description: "Vuelos posteriores con apoyo que estabilizan el cuerpo y permiten mayor concentración en el deltoides posterior." },
    { name: "Vuelos Posteriores con Mancuerna Sentado", videoId: "1LjkpajVcbNaEvsvjSZwRYshzAlUAKXSH", description: "Vuelos posteriores sentado que eliminan la compensación del cuerpo y aíslan el deltoides posterior." },
    { name: "Vuelos Posteriores con Mancuerna", videoId: "1UdUrrwoTBloHrbyGAQgLEs4QeGizsPJ7", description: "Vuelos posteriores clásicos que fortalecen el deltoides posterior y mejoran la postura corporal." }
  ],
  biceps: [
    { name: "Bíceps Predicador en Máquina", videoId: "1ro6qejym5YmFlK1Nx-SmOKNFT-xC8PMk", description: "Curl de bíceps en máquina predicador. Aislamiento perfecto que elimina el impulso y enfatiza el pico de contracción." },
    { name: "Bíceps Predicador con Mancuerna", videoId: "1LnGkzLPPI2u1LgAoty0O2679gk7Uv_Pl", description: "Curl predicador unilateral con mancuerna. Permite trabajar cada brazo independientemente y corregir desequilibrios." },
    { name: "Bíceps Predicador con Barra W", videoId: "1Sm4OcJwf4bs03HlYB6ow3I4Xhi2ZnKZW", description: "Curl predicador con barra W. La forma ergonómica reduce el estrés en muñecas y enfatiza el bíceps." },
    { name: "Bíceps Martillo Predicador con Mancuerna", videoId: "1X2WlvJcUaifFsecqJVae-CPwbOqQavDq", description: "Curl martillo en banco predicador. Trabaja bíceps, braquial anterior y braquiorradial con aislamiento total." },
    { name: "Bíceps Martillo Cruzado Alternado con Mancuernas", videoId: "1SQ4C1U2iWJTPKk6JRXBwyBJFIZ1Yg4s6", description: "Curl martillo cruzado que añade trabajo del core y estabilidad mientras desarrolla los bíceps." },
    { name: "Bíceps Martillo Alternado con Mancuernas", videoId: "1GgJ91vLgSUramUGhAwWrweVfWaR3RneU", description: "Curl martillo clásico alternado. Desarrolla bíceps, braquial anterior y mejora la fuerza de agarre." },
    { name: "Bíceps Inclinado con Mancuernas", videoId: "1t3j3SGBEmbcTXkCp1SMSoio93O0bLbPf", description: "Curl en banco inclinado que pre-estira el bíceps y permite mayor rango de movimiento." },
    { name: "Bíceps en Máquina", videoId: "1xTQlh2CwZoGT4aV6wwH2H9JxGHHTBa5B", description: "Curl de bíceps en máquina específica. Movimiento guiado que permite concentrarse en la contracción." },
    { name: "Bíceps Concentrado", videoId: "1R7mpleBSlJqSQhNEXz-QoNiC5az2Y67v", description: "Curl concentrado sentado. Aislamiento máximo del bíceps eliminando cualquier ayuda del cuerpo." },
    { name: "Bíceps con Mancuerna con Apoyo", videoId: "1BVCotzsql9X_vWIqFNiXUYPQuKLTO0Jq", description: "Curl con mancuerna apoyando el brazo. Estabiliza el movimiento y permite mayor concentración." },
    { name: "Bíceps con Cable con Barra", videoId: "1mi4BWO_9BcwHuSG87kxJxCtCzAKXLI4z", description: "Curl con barra en polea baja. Mantiene tensión constante durante todo el rango de movimiento." },
    { name: "Bíceps con Barra W", videoId: "147Yf4ykTVUKyeNpkxg2GizESDojet-1b", description: "Curl clásico con barra W. La forma ergonómica es más cómoda para las muñecas que la barra recta." },
    { name: "Bíceps con Barra W Agarre Inverso", videoId: "1opm5waLBDBIcAYKUvNeib7vrPoZPH0lp", description: "Curl con barra W en agarre inverso. Trabaja bíceps desde un ángulo diferente y fortalece antebrazos." },
    { name: "Bíceps Alternado con Mancuernas", videoId: "1x7Y5FK-tcoRpCGF21TWFgEclo1Tbdk2M", description: "Curl alternado de pie con mancuernas. Ejercicio básico y efectivo para desarrollo bilateral de bíceps." },
    { name: "Bíceps Alternado con Mancuernas Sentado", videoId: "10A6Ibuc5YcUA6dFeth8LPTvfiKDuFPWE", description: "Curl alternado sentado. Elimina el impulso del cuerpo y permite mayor concentración en cada brazo." }
  ],
  triceps: [
    { name: "Extensión de Tríceps con Polea con Apoyo", videoId: "1-c13y0TQpuXBygsytGOGw9lMiYfkifz8", description: "Extensión de tríceps en polea con apoyo corporal. Permite mayor estabilidad y concentración en el movimiento." },
    { name: "Extensión de Tríceps con Polea con Barra", videoId: "165JH0I8sW0sXsqE11Z-RB1f9YSpMTlen", description: "Extensión clásica de tríceps en polea con barra recta. Ejercicio fundamental para desarrollo de tríceps." },
    { name: "Extensión de Tríceps con Polea", videoId: "1p6Ig9l-wj3Nk02khzEYE13XAMHJ1zQly", description: "Extensión básica de tríceps en polea. Mantiene tensión constante durante todo el rango de movimiento." },
    { name: "Flexiones BB Cerradas", videoId: "1A8Ja7MrkGyfAuLu9rMm0Y-ygj_dGOeG-", description: "Flexiones con agarre cerrado que enfatizan el trabajo de tríceps sobre pectorales." },
    { name: "Flexiones BB para Tríceps", videoId: "1r3bCDkNdD1se_RtMQ26_0FKRrXEkEZ6q", description: "Flexiones específicamente diseñadas para maximizar la activación de los tríceps." },
    { name: "Fondos con Peso", videoId: "1MyfPewMxuxCD9HfgnydTxVaPOtCJDX_K", description: "Fondos en paralelas con peso adicional. Ejercicio avanzado para desarrollo de tríceps y pectorales." },
    { name: "Fondos en Apoyo", videoId: "1YiCsUvxQEPrFPAPfePpOFo9aRlUAmxWy", description: "Fondos realizados con apoyo en banco. Variante más accesible para principiantes." },
    { name: "Fondos para Tríceps", videoId: "1gWFhIsRKvlFbGxjbTPWurvsTZmZQlT0K", description: "Fondos clásicos enfocados en el desarrollo específico de los tríceps." },
    { name: "Fondos Sentado en Máquina", videoId: "1NnzKZ_K5J4nxJ2qQbZopPvXqfdwCdQOy", description: "Fondos en máquina sentado que proporciona soporte y control del movimiento." },
    { name: "Patadas Tríceps con Mancuerna", videoId: "1mzHDiEAjmglBPzczXHnh-ySuETM031tC", description: "Ejercicio unilateral de aislamiento que permite trabajar cada tríceps independientemente." },
    { name: "Press Banca con Agarre Cerrado en Smith", videoId: "1bozxGYZDRlOInyasSbB5cxP1ISNMrQhO", description: "Press de banca con agarre cerrado en máquina Smith. Enfatiza tríceps con mayor estabilidad." },
    { name: "Press Banca con Agarre Cerrado", videoId: "1EH6i0xBrb9COfLNrOD63grbmpnCgaXdv", description: "Press de banca con agarre del ancho de hombros que enfatiza el trabajo de tríceps." },
    { name: "Press Francés Acostado 45°", videoId: "1IHXvDlZKipk6wOJ7cvl0DACI89Vnq56m", description: "Press francés en banco inclinado a 45 grados. Cambia el ángulo de trabajo del tríceps." },
    { name: "Press Francés con Polea", videoId: "13UL6YXteMgD8WOdzSvN8W25PFtUapcjs", description: "Press francés realizado en polea que mantiene tensión constante en los tríceps." },
    { name: "Press Francés de Pie", videoId: "19nZK1hdMyO7jsCp2A7N-5t4NgdfK91d-", description: "Press francés realizado de pie que requiere mayor estabilidad del core." },
    { name: "Press Francés Inclinado 45° con Mancuerna", videoId: "1c6fAuw0oNnc93gfhmkP-90WuVSc3v8Cg", description: "Press francés inclinado con mancuerna que permite trabajo unilateral." },
    { name: "Press Francés Sentado con Apoyo 45°", videoId: "1wabSzp9GnEmqK9ZiUMuoB98lJsxtBvsd", description: "Press francés sentado con respaldo que proporciona estabilidad adicional." },
    { name: "Press Francés Sentado sin Apoyo", videoId: "1dJs8JEwMewIIJRtiNHSdG9gZmkipIBzO", description: "Press francés sentado sin respaldo que requiere mayor activación del core." },
    { name: "Press Francés Unilateral con Apoyo", videoId: "1-wVWtPeE2mSTuXPIAyaLY21sCGkvVb4B", description: "Press francés unilateral con apoyo que permite corregir desequilibrios." },
    { name: "Tríceps con Polea Agarre Inverso", videoId: "1pm42ieycQSk2NXWFpdjHW0W4cnFS-PQ_", description: "Extensión de tríceps en polea con agarre inverso que cambia el ángulo de activación." }
  ],
  antebrazos: [
    { name: "Bíceps con Barra W Agarre Inverso", videoId: "1LcZIuYHb-yxLzKD7gRNHkgq_XkbLJXcp", description: "Curl con barra W en agarre inverso que fortalece antebrazos y braquiorradial." },
    { name: "Bíceps con Cable con Barra W Agarre Inverso", videoId: "15OII_FVeOzK_OFR8HrjVUomdS6IUZ-Um", description: "Variante en polea del curl inverso. Mantiene tensión constante en antebrazos." },
    { name: "Bíceps Martillo Alternado con Mancuernas", videoId: "11owrSDpmOYiTrJ_hpB6k9Zadxh62cqLY", description: "Curl martillo alternado que desarrolla bíceps, braquial anterior y antebrazos." },
    { name: "Bíceps Martillo Cruzado Alternado con Mancuernas", videoId: "1PEos2GmJtAfpNWxoHHN4hB6j2pcFGCme", description: "Variante cruzada del curl martillo que añade trabajo del core y estabilidad." },
    { name: "Bíceps Martillo Predicador con Mancuerna", videoId: "18DoOY6tn_rU3xB1kvAjP3ZdGw32wfjnY", description: "Curl martillo en banco predicador que aísla el movimiento y enfatiza antebrazos." },
    { name: "Círculos de Muñeca con Mancuernas", videoId: "1U6lgFwtu8r4vXP_ndlufPEZ-AH_Vwrok", description: "Ejercicio de movilidad y fortalecimiento específico para las muñecas." },
    { name: "Curl con Barra para Antebrazos", videoId: "12N4XSxqhjQhI3KyQMfx8NTu1T-Wnd1cz", description: "Curl específico para antebrazos con barra. Desarrolla fuerza de agarre." },
    { name: "Curl con Cable para Antebrazos", videoId: "1sqTPGGvmzRaLO2QfU7TzVy870XK5-yYL", description: "Variante en polea que permite trabajar antebrazos con resistencia constante." },
    { name: "Rodillo para Antebrazos", videoId: "1hMKOlJJXKjdwk8ITnB8eHOvwhD9iQ3iP", description: "Ejercicio con rodillo que fortalece antebrazos y mejora la fuerza de agarre." }
  ],
  core: [
    { name: "Abdominales con Ruedas", videoId: "1EPd1mlDWyk8bGC7fTeYy0ZkMrRobLDAB", description: "Ejercicio avanzado con rueda abdominal que trabaja todo el core de forma intensa y funcional." },
    { name: "Crunch con Polea de Pie", videoId: "18TAJI9c-nHmobfqohEp8btc_bxH1EdoK", description: "Crunch de pie en polea que permite trabajar el core con resistencia variable y de forma funcional." },
    { name: "Crunch con Polea", videoId: "1fBKjvO8dDVh2_aUG9BIhYO4pFSEM4_yD", description: "Crunch clásico en polea que proporciona resistencia constante y permite progresión controlada." },
    { name: "Crunch Declinado", videoId: "1a-UhAhEFjJDREUT-kms82kW_TBAsMbk5", description: "Crunch en banco declinado que aumenta la dificultad y el rango de movimiento del ejercicio." },
    { name: "Crunch en Máquina", videoId: "1BjpgVl1GORdvQ4kD8phzxHLxfB-Yf-BD", description: "Crunch en máquina específica que guía el movimiento y permite ajustar la resistencia con precisión." },
    { name: "Elevación de Piernas Inclinado", videoId: "1pf0AU8B_gW8-sWSNZfo1ElzNx_XmO9LW", description: "Elevación de piernas en banco inclinado que trabaja la porción inferior del abdomen con mayor intensidad." },
    { name: "Elevación de Piernas Acostado", videoId: "1ykjxBLXWX1mHyaGGOiFPP9JDBKuHdXmP", description: "Elevación de piernas acostado que fortalece el abdomen inferior y mejora la estabilidad del core." },
    { name: "Elevación de Piernas Vertical (Colgado)", videoId: "1t65NC9uTEyDqHd4lwFhLmte5Y0xDrhWD", description: "Elevación de piernas colgado de barra que trabaja intensamente el core y mejora la fuerza de agarre." },
    { name: "Elevación de Piernas Vertical", videoId: "1snEads61earyIHMcG2fc5EgrVFXD_wPq", description: "Elevación de piernas en posición vertical que desafía la estabilidad y fortalece todo el core." },
    { name: "Escaladas", videoId: "1EsStIT8dqVD2mYlUF0UeU78OuQnQwE3T", description: "Mountain climbers que combinan trabajo cardiovascular con fortalecimiento dinámico del core." },
    { name: "Flexión Abdominal Lateral Acostado", videoId: "1nWclK4u5xXEM5uqJOAP5ktS0GDAkhQFe", description: "Flexión lateral acostado que trabaja específicamente los músculos oblicuos de forma aislada." },
    { name: "Flexión Abdominal Lateral con Mancuerna", videoId: "15SkeoXeyX34VwRPVQXHEwa415lueyI4D", description: "Flexión lateral con mancuerna que añade resistencia al trabajo de los oblicuos y mejora la definición." },
    { name: "Hiperextensión 45° Lumbares", videoId: "1SHncVq_rZhZkUvp-UOusTVaDS1edWydJ", description: "Hiperextensión a 45 grados que fortalece la musculatura lumbar y mejora la postura corporal." },
    { name: "Oblicuos con Peso", videoId: "1SkHQ9QQQnqYx3JCU-Z1Lgy5SS3TKZd8-", description: "Ejercicio para oblicuos con peso adicional que intensifica el trabajo de los músculos laterales del core." },
    { name: "Plancha Extensa", videoId: "1Y2_msKNEkwS-sQLPdsmp6wftWsJPzIZ7", description: "Plancha con brazos extendidos que aumenta la dificultad y el trabajo de estabilización del core." },
    { name: "Plancha Frontal", videoId: "1gDnvOMTqTkFRmNDMOoSdYOin05tIUS60", description: "Plancha clásica frontal que fortalece todo el core de forma isométrica y mejora la estabilidad." },
    { name: "Plancha Lateral", videoId: "1Uu0rXn3fxNGTHNRZc3OOKms_ru0qePFX", description: "Plancha lateral que trabaja específicamente los oblicuos y mejora la estabilidad lateral del core." },
    { name: "Superman", videoId: "1aCBL0xpqdv4UcN8TloNfLgYWmaIvpK-t", description: "Ejercicio superman que fortalece la espalda baja, glúteos y mejora la extensión de la columna." }
  ],
  full_body: [
    { name: "Arranque de Potencia con Barra", videoId: "1iCKpD4SLJTt0KWpdKQUEhmIdAjfLB7Zs", description: "Ejercicio olímpico explosivo que desarrolla potencia en todo el cuerpo. Trabaja piernas, core, hombros y coordinación." },
    { name: "Arranque de Potencia con Sentadilla con Barra", videoId: "1ZJ7T1AXZPkoFY331D35burrNskUKw-62", description: "Variante del arranque que incluye sentadilla completa. Desarrolla fuerza, potencia y movilidad integral." },
    { name: "Arranque Dividido con Barra", videoId: "1Ja1zsEk3wVMcd9V2W-TR10J6cVaZ5Eqg", description: "Arranque con recepción en posición dividida. Mejora la estabilidad unilateral y la coordinación." },
    { name: "Arranque Muscular con Barra", videoId: "1-Nfjap3NVHkZQivb3pi-G4CUnt78pUVK", description: "Arranque sin flexión de piernas que enfatiza la fuerza de tracción y potencia de brazos y espalda." },
    { name: "Balanceo con Rusa a Dos Manos", videoId: "1bC1IfG52yMfbdYdNbEhMjKKXQW2jP_e5", description: "Swing con kettlebell a dos manos. Ejercicio fundamental que desarrolla potencia de cadera y resistencia." },
    { name: "Balanceo con Rusa a Una Mano", videoId: "1PpjubQyTaWYWFt6rW32j7-fb7YLO0pWb", description: "Swing unilateral con kettlebell que añade trabajo de estabilización del core y corrección de desequilibrios." },
    { name: "Balanceo con Rusas", videoId: "1UiF6uGIHPNjO1I0PLBK-QR03fx4ISdba", description: "Swing con dos kettlebells que intensifica el trabajo y requiere mayor coordinación y fuerza." },
    { name: "Bicicleta Elíptica", videoId: "16SW7fwFFYBPbRsSGO-oI2_KuhFcAZe28", description: "Ejercicio cardiovascular de bajo impacto que trabaja todo el cuerpo de forma suave y efectiva." },
    { name: "Burpees con Mancuernas", videoId: "1Smwm2nFs6TGkdgcC-m6pp5jBM-rojOJ9", description: "Burpees con mancuernas que añaden resistencia al movimiento. Combina fuerza, cardio y coordinación." },
    { name: "Burpees", videoId: "1FYz1WNqWrqYbAVdRku4qipnYaeE7GQMo", description: "Ejercicio completo con peso corporal que combina sentadilla, plancha, flexión y salto. Excelente para cardio y fuerza." },
    { name: "Cargadas con Barra", videoId: "1UF730gkwbQaJekMeuihAWIidqf3LlIWm", description: "Ejercicio olímpico que desarrolla potencia explosiva. Trabaja desde piernas hasta hombros de forma coordinada." },
    { name: "Cargadas con Mancuernas con Press de Hombros", videoId: "1pZ8bNH2kJKEbkI-Xs2VqueCBRuf27tx_", description: "Combinación de cargada y press que trabaja todo el cuerpo. Desarrolla potencia, fuerza y estabilidad." },
    { name: "Máquina de Remo", videoId: "1VMKULMWUsUTrsnOvVC0En9biBtZjzDp4", description: "Ejercicio cardiovascular completo que trabaja 85% de los músculos del cuerpo. Excelente para resistencia y fuerza." },
    { name: "Power Jerk con Barra", videoId: "https://drive.google.com/file/d/1VMKULMWUsUTrsnOvVC0En9biBtZjzDp4/view?usp=drivesdk", description: "Envión de potencia que desarrolla fuerza explosiva de hombros y estabilidad del core." },
    { name: "Power Jerk Dividido con Barra", videoId: "https://drive.google.com/file/d/1K7_DN9OOZZ20BUqYjh8eb444GROVaKm3/view?usp=drivesdk", description: "Variante del power jerk con recepción en posición dividida. Mejora la estabilidad unilateral y coordinación." }
  ],
  cardio: [
    { name: "Bicicleta Elíptica", videoId: "1v384vGz5bUtEjJL3Cjmvaxei0JHXaUeh", description: "Ejercicio cardiovascular de bajo impacto que trabaja todo el cuerpo. Ideal para quemar calorías sin impacto en articulaciones." },
    { name: "Bicicleta", videoId: "1Kt84PlJ3RP_Vxv6gTDZ3ZIqC6XId8ofW", description: "Ejercicio cardiovascular clásico que fortalece piernas y mejora la resistencia. Excelente para principiantes y avanzados." },
    { name: "Caminar en Cinta", videoId: "1H421tXjZ5uQPzST1kMDKyauDWKJxzo9Z", description: "Caminata en cinta de correr. Ejercicio de bajo impacto perfecto para calentamiento, recuperación activa o cardio suave." },
    { name: "Correr en Cinta Inclinada", videoId: "1yO-gTzvDWy9qrLyWSbrvShINuSD7KnLX", description: "Carrera en cinta con inclinación que aumenta la intensidad y simula correr en subida. Quema más calorías y fortalece piernas." },
    { name: "Correr en Cinta", videoId: "1tw6nu2sEALVVS_y6HvmOIClL-9jmn0cJ", description: "Carrera clásica en cinta de correr. Ejercicio cardiovascular fundamental para mejorar resistencia y quemar calorías." },
    { name: "Elíptica", videoId: "1t3bkF6YvhVIB1b6Wmqk6jbId0zbIwb6p", description: "Máquina elíptica que combina movimiento de brazos y piernas. Bajo impacto y alta efectividad para cardio completo." },
    { name: "Máquina de Remo", videoId: "1edAYCn_wOoSRw2mXmVFi2qlH6fnNLP0N", description: "Remo cardiovascular que trabaja 85% de los músculos del cuerpo. Combina cardio intenso con fortalecimiento muscular." }
  ],
  pliometria: [
    { name: "Estocadas con Salto Unilateral", videoId: "1578rRd06Zku5SgvbMOWjzWXD4tM5RT95", description: "Estocadas explosivas unilaterales que desarrollan potencia, equilibrio y fuerza funcional en cada pierna independientemente." },
    { name: "Estocadas con Salto", videoId: "1ynfe8GWo_6bZrY01YUzssBuxxGuszzCK", description: "Estocadas pliométricas que alternan piernas con salto. Desarrollan potencia explosiva y mejoran la coordinación." },
    { name: "Flexiones BB con Toque de Hombro", videoId: "1uu4FyMDlLJtVJQ03wL241Mzjk9x9Vc8o", description: "Flexiones dinámicas con toque de hombro que combinan fuerza de pecho con estabilidad del core y coordinación." },
    { name: "Salto al Cajón de Lado", videoId: "1JW7AGfa21stuBzDDPyPyoj6GNq3m7nzc", description: "Saltos laterales al cajón que desarrollan potencia lateral, agilidad y fortalecen los músculos estabilizadores." },
    { name: "Salto al Cajón", videoId: "1NvKMRusRjPwCvIDVkZVqikH4J0U2BnTZ", description: "Salto vertical al cajón clásico. Desarrolla potencia explosiva de piernas y mejora la capacidad de salto vertical." },
    { name: "Salto en Escalera", videoId: "1myNcsP8nmeFsgkEM2F1ulE2hraOXyA73", description: "Ejercicio de agilidad en escalera que mejora la coordinación, velocidad de pies y capacidad de reacción." },
    { name: "Salto Encogido", videoId: "1iYubPgaeiiA_2CDFPT7RNlW5dFrI5K8V", description: "Salto vertical con rodillas al pecho que desarrolla potencia explosiva y fortalece el core de forma intensa." },
    { name: "Sentadilla con Doble Salto", videoId: "1ANVGR0z6UsINtgGW-W1WiI_7p0dIF0p0", description: "Sentadilla pliométrica con doble salto que maximiza el desarrollo de potencia y resistencia explosiva." },
    { name: "Sentadilla con Salto con Mancuernas", videoId: "1mxAVKle478RKiaFCFCbAWZNNP6sb4Qcp", description: "Sentadilla con salto añadiendo resistencia con mancuernas. Combina fuerza y potencia para mayor intensidad." }
  ],
  weight_lifting: [
    { name: "Power Jerk Dividido con Barra", videoId: "1fRcC00SWLtX5rLgyN06zokIYq2Y7EePX", description: "Envión de potencia con recepción en posición dividida. Desarrolla fuerza explosiva de hombros y estabilidad unilateral avanzada." },
    { name: "Power Jerk con Barra", videoId: "15rnVdSZsKC-uE3M0CX8KBBzhC0t8xq2H", description: "Envión de potencia olímpico que desarrolla fuerza explosiva de todo el cuerpo. Ejercicio técnico de alta complejidad." },
    { name: "Cargadas con Mancuernas con Press de Hombros", videoId: "1h-Mw94WygExr29fGCSBK6gtHDVrsbI-Z", description: "Combinación de cargada y press que trabaja todo el cuerpo. Desarrolla potencia, fuerza y coordinación de forma integral." },
    { name: "Cargadas con Barra", videoId: "13GzVdQFHeX04akzdNUPLXs2XylASgvac", description: "Ejercicio olímpico fundamental que desarrolla potencia explosiva desde piernas hasta hombros de forma coordinada." },
    { name: "Balanceo con Rusa a Una Mano", videoId: "https://drive.google.com/file/d/1TNoSwyg-LdZGu6SvxiwaJoZ0KkaYOJSB/view?usp=drivesdk", description: "Swing unilateral con kettlebell que añade trabajo de estabilización del core y corrección de desequilibrios." },
    { name: "Balanceo con Rusa a Dos Manos", videoId: "https://drive.google.com/file/d/1xR-6Ouitr4K4CbGnh04byr7k6p2VFgxn/view?usp=drivesdk", description: "Swing con kettlebell a dos manos. Ejercicio fundamental que desarrolla potencia de cadera y resistencia cardiovascular." },
    { name: "Arranque Muscular con Barra", videoId: "1TNoSwyg-LdZGu6SvxiwaJoZ0KkaYOJSB", description: "Arranque sin flexión de piernas que enfatiza la fuerza de tracción y potencia de brazos y espalda de forma pura." },
    { name: "Arranque Dividido con Barra", videoId: "1s72KRoNfHjWHId9mhu2RzgzYDD8EPgmL", description: "Arranque con recepción en posición dividida. Mejora la estabilidad unilateral y la coordinación técnica avanzada." },
    { name: "Arranque de Potencia con Sentadilla con Barra", videoId: "1DVr_5ntzpy0tQNbRjKIcsB2jBXueMNhf", description: "Variante del arranque que incluye sentadilla completa. Desarrolla fuerza, potencia y movilidad de forma integral." },
    { name: "Arranque de Potencia con Barra", videoId: "1O5Ty5SbYNPasXHQiozVeHoO7EPxoQwku", description: "Ejercicio olímpico explosivo que desarrolla potencia en todo el cuerpo. Trabaja piernas, core, hombros y coordinación técnica." }
  ],
  acondicionamiento: [
    { name: "Patadas Atrás", videoId: "1N5USpUu0xuH1k9XnSZY7NWQ3kXBPAo_I", description: "Ejercicio de acondicionamiento que trabaja glúteos y isquiotibiales de forma dinámica. Mejora la coordinación y activa la cadena posterior." },
    { name: "Skipping Rodillas Arriba", videoId: "1YP2tRw0VbRR3CWOMmeDGoGXNkAouoQyo", description: "Ejercicio cardiovascular de alta intensidad que mejora la coordinación, eleva la frecuencia cardíaca y fortalece el core." },
    { name: "Sentadillas más Estocadas con Peso (Bolsa)", videoId: "", description: "Combinación de sentadillas y estocadas usando una bolsa como peso. Ejercicio funcional que desarrolla fuerza y resistencia en piernas." },
    { name: "Burpees con Flexiones de Brazos", videoId: "", description: "Burpees completos incluyendo flexión de brazos y marcando bien la sentadilla. Ejercicio de cuerpo completo de alta intensidad." },
    { name: "Bíceps más Press Arnold con Mancuernas", videoId: "", description: "Combinación de curl de bíceps seguido de press Arnold. Trabaja bíceps y hombros de forma continua y eficiente." },
    { name: "Rotaciones de Cadera", videoId: "", description: "Ejercicio de movilidad que mejora la flexibilidad de cadera y prepara las articulaciones para el entrenamiento." },
    { name: "Rotaciones de Brazos", videoId: "", description: "Movimiento de calentamiento que prepara los hombros y mejora la movilidad articular del tren superior." },
    { name: "Círculos de Brazos Hacia Adelante", videoId: "", description: "Ejercicio de movilidad que calienta los hombros y mejora la circulación en el tren superior." },
    { name: "Círculos de Brazos Hacia Atrás", videoId: "", description: "Movimiento de calentamiento que prepara los hombros en dirección opuesta y equilibra la movilidad articular." },
    { name: "Estiramiento de Cuádriceps", videoId: "", description: "Ejercicio de flexibilidad que alarga los músculos del cuádriceps y mejora la movilidad de la cadera." },
    { name: "Estiramiento de Isquiotibiales", videoId: "", description: "Estiramiento que mejora la flexibilidad de la cadena posterior y reduce la tensión en la espalda baja." },
    { name: "Estiramiento de Hombros", videoId: "", description: "Movimiento que mejora la flexibilidad del hombro y reduce la tensión en el tren superior." },
  ],
};

/* ===========================
   CONFIGURACIÓN DE ACCESOS
=========================== */
// Contraseña de administrador (acceso a todas las carpetas y base)
const ADMIN_PASSWORD_HASH =
  "russia-quarzo-amore-limoncello-siberia-tundra-siberia-urali-russia-tiramisu-siberia-amore-quarzo-espresso-amore-hermitage-octavo-samovar-zarina-firenze-batata";

/* ===========================
   CARPETAS / PLANES
=========================== */
const trainingFolders = {
  "2 MUSCULACIÓN + 2 HIIT": { routines: {} },



  "2 MUSCULACIÓN + (2 LISS)": {
    routines: {
      "agustina": {
        name: "Agustina",
        plan: {
          "Día 1 - Tren Superior": [
            "Press de banca con mancuernas 4 x 8-8-8-8",
            "Remo con mancuerna 4 x 8-8-8-8",
            "Press militar con mancuernas 3 x 10-10-10",
            "Dominadas asistidas 3 x 6-6-6",
            "Curl de bíceps 3 x 12-12-12",
            "Extensiones de tríceps 3 x 12-12-12"
          ],
          "Día 2 - Tren Inferior": [
            "Sentadillas con mancuernas 4 x 10-10-10-10",
            "Peso muerto rumano 4 x 8-8-8-8",
            "Estocadas alternas 3 x 12-12-12 c/pierna",
            "Hip thrust 3 x 12-12-12",
            "Elevaciones de talones 3 x 15-15-15",
            "Plancha 3 x 30-30-30 seg"
          ]
        }
      }
    }
  },



  "3 MUSCULACIÓN + 1 HIIT + (1 LISS)": {
    routines: {
      "camila": {
        name: "Camila",
        plan: {
          "Día 1 - Piernas y Glúteos": [
            "Sentadillas sumo 4 x 12-12-12-12",
            "Hip thrust con barra 4 x 10-10-10-10",
            "Estocadas búlgaras 3 x 12-12-12 c/pierna",
            "Peso muerto rumano 4 x 10-10-10-10",
            "Puentes de glúteo 3 x 15-15-15",
            "Caminata lateral con banda 3 x 15-15-15 c/lado"
          ],
          "Día 2 - Tren Superior": [
            "Press inclinado con mancuernas 4 x 8-8-8-8",
            "Remo con barra 4 x 8-8-8-8",
            "Press militar 3 x 10-10-10",
            "Jalones al pecho 3 x 10-10-10",
            "Curl martillo 3 x 12-12-12",
            "Fondos para tríceps 3 x 10-10-10"
          ],
          "Día 3 - Glúteos y Core": [
            "Hip thrust unilateral 3 x 12-12-12 c/lado",
            "Sentadillas búlgaras 3 x 10-10-10 c/pierna",
            "Patadas de glúteo en polea 3 x 15-15-15 c/lado",
            "Peso muerto unilateral 3 x 10-10-10 c/lado",
            "Russian twists 3 x 20-20-20",
            "Plancha con elevación de pierna 3 x 10-10-10 c/lado"
          ]
        }
      }
    }
  },



  "3 MUSCULACIÓN + 2 HIIT": { routines: {} },



  "3 MUSCULACIÓN + 2 HIIT + (1 LISS)": { routines: {} },



  "4 MUSCULACIÓN (1 FB HIIT) + (1 LISS)": {
    routines: {
      "sofia": {
        name: "Sofía",
        plan: {
          "Día 1 - Push (Empuje)": [
            "Press de banca 4 x 6-6-6-6",
            "Press inclinado con mancuernas 4 x 8-8-8-8",
            "Press militar 4 x 8-8-8-8",
            "Elevaciones laterales 3 x 12-12-12",
            "Fondos en paralelas 3 x 8-8-8",
            "Extensiones de tríceps 3 x 12-12-12"
          ],
          "Día 2 - Pull (Tirón)": [
            "Dominadas 4 x 6-6-6-6",
            "Remo con barra 4 x 8-8-8-8",
            "Jalones al pecho 3 x 10-10-10",
            "Remo con mancuerna 3 x 10-10-10",
            "Curl de bíceps con barra 3 x 12-12-12",
            "Curl martillo 3 x 12-12-12"
          ],
          "Día 3 - Legs (Piernas)": [
            "Sentadillas con barra 4 x 8-8-8-8",
            "Peso muerto convencional 4 x 6-6-6-6",
            "Prensa de piernas 3 x 12-12-12",
            "Curl de isquiotibiales 3 x 12-12-12",
            "Extensión de cuádriceps 3 x 12-12-12",
            "Elevaciones de talones 4 x 15-15-15-15"
          ],
          "Día 4 - Full Body HIIT": [
            "Burpees con mancuernas 4 x 45-45-45-45 seg",
            "Sentadillas con salto 4 x 45-45-45-45 seg",
            "Remo con mancuernas 4 x 45-45-45-45 seg",
            "Estocadas con salto 4 x 45-45-45-45 seg",
            "Plancha con toque de hombro 4 x 45-45-45-45 seg"
          ]
        }
      }
    }
  },



  "4 MUSCULACIÓN + 1 HIIT + (1 LISS)": {
  routines: {
    "francisco": {
      name: "Francisco",
      plan: {
        "Día 1 - Pecho y Tríceps": [
          "Press de banca 4 x 8-8-8-8",
          "Press inclinado con mancuernas 4 x 10-10-10-10",
          "Fondos para tríceps 3 x 12-12-12",
          "Aperturas en banca 3 x 12-12-12",
          "Extensiones de tríceps 3 x 12-12-12"
        ],
        "Día 2 - Espalda y Bíceps": [
          "Dominadas 4 x 8-8-8-8",
          "Remo con barra 4 x 10-10-10-10",
          "Curl de bíceps 3 x 12-12-12",
          "Remo con mancuerna 3 x 12-12-12",
          "Curl martillo 3 x 12-12-12"
        ],
        "Día 3 - Piernas": [
          "Sentadillas 4 x 10-10-10-10",
          "Prensa de piernas 4 x 12-12-12-12",
          "Peso muerto rumano 3 x 12-12-12",
          "Elevaciones de talones 3 x 15-15-15",
          "Plancha 3 x 30-30-30 seg"
        ],
        "Día 4 - Hombros y Core": [
          "Press militar 4 x 10-10-10-10",
          "Elevaciones laterales 3 x 12-12-12",
          "Vuelos posteriores 3 x 12-12-12",
          "Crunch abdominal 3 x 20-20-20",
          "Plancha lateral 3 x 30-30-30 seg"
        ]
      }
    }
  }
},



  "4 MUSCULACIÓN + 2 HIIT": { routines: {} },



  "5 MUSCULACIÓN + 1 HIIT + (1 LISS)": {
  routines: {
    "francisco": {
      name: "Francisco",
      plan: {
        "Día 1 - Pecho y Tríceps": [
          "Press de banca 4 x 8-8-8-8",
          "Press inclinado con mancuernas 4 x 10-10-10-10",
          "Fondos para tríceps 3 x 12-12-12",
          "Aperturas en banca 3 x 12-12-12",
          "Extensiones de tríceps 3 x 12-12-12"
        ],
        "Día 2 - Espalda y Bíceps": [
          "Dominadas 4 x 8-8-8-8",
          "Remo con barra 4 x 10-10-10-10",
          "Curl de bíceps 3 x 12-12-12",
          "Remo con mancuerna 3 x 12-12-12",
          "Curl martillo 3 x 12-12-12"
        ],
        "Día 3 - Piernas": [
          "Sentadillas 4 x 10-10-10-10",
          "Prensa de piernas 4 x 12-12-12-12",
          "Peso muerto rumano 3 x 12-12-12",
          "Elevaciones de talones 3 x 15-15-15",
          "Plancha 3 x 30-30-30 seg"
        ],
        "Día 4 - Hombros y Core": [
          "Press militar 4 x 10-10-10-10",
          "Elevaciones laterales 3 x 12-12-12",
          "Vuelos posteriores 3 x 12-12-12",
          "Crunch abdominal 3 x 20-20-20",
          "Plancha lateral 3 x 30-30-30 seg"
        ]
      }
    }
  }
},



  "5 MUSCULACIÓN + (1 LISS)": { routines: {} },



  "5 MUSCULACIÓN + 2 HIIT": { routines: {} },



  "5 MUSCULACIÓN + 3 HIIT": { routines: {} },



  "6 MUSCULACIÓN + 2 HIIT + (1 LISS)": { routines: {} },



  "6 MUSCULACIÓN + 2 HIIT": { routines: {} }





};

/* (Eliminado bloque de overrides por rutina para volver al comportamiento anterior) */

/* ===========================
   MAPEO USUARIOS → RUTINAS
=========================== */
const userRoutineMapping = {
  agustina: { folder: "2 MUSCULACIÓN + (2 LISS)", routine: "agustina" },
  camila:   { folder: "3 MUSCULACIÓN + 1 HIIT + (1 LISS)", routine: "camila" },
  sofia:    { folder: "4 MUSCULACIÓN (1 FB HIIT) + (1 LISS)", routine: "sofia" },
  francisco: { folder: "4 MUSCULACIÓN + 1 HIIT + (1 LISS)", routine: "francisco" },
};

/* ===========================
   CONTRASEÑAS POR USUARIO
=========================== */
// Mapea contraseñas únicas a la clave de usuario definida en `userRoutineMapping`.
// Edita estos valores para asignar contraseñas reales por persona.
// Nota: En un sitio estático, estas contraseñas quedan visibles en el código fuente.
//       Para máxima seguridad, usa un BACKEND. Esto es un control básico.

const userPasswords = {
  // CLAVES ÚINCAS DE USUARIOS
  'vesuvio-kremlin-quarzo-espresso-amore-siberia-russia-vesuvio-octavo-zarina-octavo-batata': 'agustina',
  'tundra-vesuvio-balalaika-siberia-yogurt-vesuvio-octavo-zarina-octavo-batata': 'camila',
  'espresso-urali-tiramisu-siberia-vesuvio-octavo-zarina-octavo-batata': 'sofia',
  'tiramisu-limoncello-vesuvio-russia-tundra-siberia-espresso-tundra-urali-octavo-zarina-octavo-batata': 'francisco',
};


/* ===========================
   MODALES – OPEN/CLOSE
=========================== */
function openUserTrainingAccess() {
  document.getElementById('userAccessModal').classList.add('show');
  document.getElementById('userPasswordInput').focus();
}
function closeUserAccessModal() {
  document.getElementById('userAccessModal').classList.remove('show');
  document.getElementById('userPasswordInput').value = '';
}
function openExerciseBase() {
  document.getElementById('exerciseBaseModal').classList.add('show');
  document.getElementById('basePasswordSection').style.display = 'block';
  document.getElementById('baseContent').style.display = 'none';
  document.getElementById('basePasswordInput').value = '';
  document.getElementById('basePasswordInput').focus();
}
function closeExerciseBase() {
  document.getElementById('exerciseBaseModal').classList.remove('show');
}
function closeUserTraining() {
  document.getElementById('userTrainingModal').classList.remove('show');
}

/* ===========================
   LOGIN / RENDER PLANES
=========================== */

function checkUserPassword() {
  const input = document.getElementById('userPasswordInput');
  const raw = (input?.value || '').trim().toLowerCase();
  if (!raw) return;

  const codificada = codificar(raw);

  // 1) Admin por hash
  if (codificada === ADMIN_PASSWORD_HASH /* || raw === ADMIN_PASSWORD */) {
    closeUserAccessModal();
    showAdminTrainingFolders();
    return;
  }

  // 2) Usuarios: buscar por clave codificada; (opcional) fallback por clave en claro
  const userKey = userPasswords[codificada] ?? userPasswords[raw];
  if (!userKey) {
    alert('Contraseña incorrecta. Por favor, verifica tu contraseña.');
    input.value = '';
    return;
  }

  closeUserAccessModal();
  showUserSpecificTraining(userKey);
}
window.checkUserPassword = checkUserPassword;


function showAdminTrainingFolders() {
  const modal = document.getElementById('userTrainingModal');
  const title = document.getElementById('userTrainingTitle');
  const content = document.getElementById('userTrainingContent');

  title.textContent = 'Panel de Administrador - Carpetas de Entrenamiento';
  let html = '<div class="space-y-4">';
  html += `
    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
      <p class="text-yellow-800 text-sm font-semibold">🔑 Modo Administrador Activo</p>
      <p class="text-yellow-700 text-xs mt-1">Tienes acceso completo a todas las carpetas y rutinas</p>
    </div>
  `;

  for (const [folderName, folderData] of Object.entries(trainingFolders)) {
    const routineCount = Object.keys(folderData.routines).length;
    html += `
      <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 card-hover cursor-pointer border border-blue-200"
           onclick="showFolderContents('${folderName}')">
        <div class="flex justify-between items-center">
          <div>
            <h4 class="text-lg font-bold text-blue-800 mb-2">${folderName}</h4>
            <p class="text-blue-600 text-sm">${routineCount} rutina${routineCount !== 1 ? 's' : ''} asignada${routineCount !== 1 ? 's' : ''}</p>
          </div>
          <div class="text-blue-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

  html += '</div>';
  content.innerHTML = html;
  modal.classList.add('show');
}

function showFolderContents(folderName) {
  const modal = document.getElementById('userTrainingModal');
  const title = document.getElementById('userTrainingTitle');
  const content = document.getElementById('userTrainingContent');

  title.textContent = `Carpeta: ${folderName}`;
  const folderData = trainingFolders[folderName];

  let html = `
    <button onclick="showAdminTrainingFolders()" class="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors mb-4">← Volver a Carpetas</button>
    <div class="space-y-4">
  `;

  if (Object.keys(folderData.routines).length === 0) {
    html += `
      <div class="bg-gray-50 rounded-lg p-8 text-center">
        <p class="text-gray-500 text-lg">Esta carpeta aún no tiene rutinas asignadas</p>
        <p class="text-gray-400 text-sm mt-2">Las rutinas aparecerán aquí cuando se asignen usuarios</p>
      </div>
    `;
  } else {
    for (const [routineKey, routineData] of Object.entries(folderData.routines)) {
      html += `
        <div class="bg-white rounded-lg p-6 border border-gray-200 card-hover cursor-pointer"
             onclick="showSpecificRoutine('${folderName}', '${routineKey}')">
          <div class="flex justify-between items-center">
            <div>
              <h4 class="text-lg font-bold text-gray-800">${routineData.name}</h4>
              <p class="text-gray-600 text-sm">Usuario: ${routineKey}</p>
              <p class="text-gray-500 text-xs mt-1">${Object.keys(routineData.plan).length} días de entrenamiento</p>
            </div>
            <div class="text-blue-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      `;
    }
  }

  html += '</div>';
  content.innerHTML = html;
}

function showSpecificRoutine(folderName, routineKey) {
  const routineData = trainingFolders[folderName].routines[routineKey];
  const title = document.getElementById('userTrainingTitle');
  const content = document.getElementById('userTrainingContent');

  title.textContent = `Rutina de ${routineData.name}`;

  let html = `
    <button onclick="showFolderContents('${folderName}')" class="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors mb-4">← Volver a ${folderName}</button>
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <p class="text-blue-800 font-semibold">👤 ${routineData.name}</p>
      <p class="text-blue-600 text-sm">Carpeta: ${folderName}</p>
      <p class="text-blue-600 text-sm">Usuario: ${routineKey}</p>
    </div>
    <div class="space-y-4">
  `;

  // Mostrar cada día como "carpeta"
  for (const [day, exercises] of Object.entries(routineData.plan)) {
    html += `
      <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 card-hover cursor-pointer border border-blue-200"
           onclick="showAdminRoutineDay('${folderName}', '${routineKey}', '${escapeForAttr(day)}')">
        <div class="flex justify-between items-center">
          <div>
            <h4 class="text-lg font-bold text-blue-800 mb-2">${day}</h4>
            <p class="text-blue-600 text-sm">${exercises.length} ejercicio${exercises.length !== 1 ? 's' : ''}</p>
          </div>
          <div class="text-blue-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

  html += '</div>';
  content.innerHTML = html;
}
function showAdminRoutineDay(folderName, routineKey, day) {
  const routineData = trainingFolders[folderName].routines[routineKey];
  const exercises = routineData.plan[day];

  const title = document.getElementById('userTrainingTitle');
  const content = document.getElementById('userTrainingContent');

  title.textContent = `${routineData.name} - ${day}`;

  let html = `
      <div class="flex justify-between items-center mb-4">
    <button onclick="showSpecificRoutine('${folderName}', '${routineKey}')" class="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors mb-4">← Volver a días</button>
      <div class="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg px-4 py-2 ml-4 text-blue-700 text-sm font-semibold">
        Tip: toca el nombre del ejercicio para ver el video.
      </div>
    </div>
    <div class="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <h4 class="text-xl font-bold text-gray-800 mb-4">${day}</h4>
      <ul class="space-y-3">
        ${exercises.map((ex, i) => generateRoutineItemHTML(ex, slugifyForId(day), i)).join('')}
      </ul>
    </div>
  `;
  content.innerHTML = html;
}

function showUserSpecificTraining(userKey) {
  const { folder, routine } = userRoutineMapping[userKey];
  const routineData = trainingFolders[folder].routines[routine];

  const modal = document.getElementById('userTrainingModal');
  const title = document.getElementById('userTrainingTitle');
  const content = document.getElementById('userTrainingContent');

  title.textContent = `Mi Plan de Entrenamiento - ${routineData.name}`;

  let html = `
    <div class="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6 mb-6">
      <h3 class="text-lg font-bold text-blue-800 mb-2">¡Hola ${routineData.name}! 👋</h3>
      <p class="text-blue-700">Este es tu plan de entrenamiento personalizado. Selecciona el día para ver los ejercicios.</p>
      <p class="text-blue-600 text-sm mt-2">💪 ¡Vamos por esos objetivos!</p>

    </div>
    <div class="space-y-4">
  `;

  // Mostrar cada día como "carpeta"
  for (const [day, exercises] of Object.entries(routineData.plan)) {
    html += `
      <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 card-hover cursor-pointer border border-blue-200"
           onclick="showUserRoutineDay('${userKey}', '${escapeForAttr(day)}')">
        <div class="flex justify-between items-center">
          <div>
            <h4 class="text-lg font-bold text-blue-800 mb-2">${day}</h4>
            <p class="text-blue-600 text-sm">${exercises.length} ejercicio${exercises.length !== 1 ? 's' : ''}</p>
          </div>
          <div class="text-blue-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

  html += '</div>';
  content.innerHTML = html;
  modal.classList.add('show');
}
function showUserRoutineDay(userKey, day) {
  const { folder, routine } = userRoutineMapping[userKey];
  const routineData = trainingFolders[folder].routines[routine];
  const exercises = routineData.plan[day];

  const title = document.getElementById('userTrainingTitle');
  const content = document.getElementById('userTrainingContent');

  title.textContent = `${routineData.name} - ${day}`;

  let html = `
    <div class="flex justify-between items-center mb-4">
      <button onclick="showUserSpecificTraining('${userKey}')" class="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">← Volver a días</button>
      <div class="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg px-4 py-2 ml-4 text-blue-700 text-sm font-semibold">
        Tip: toca el nombre del ejercicio para ver el video.
      </div>
    </div>
    <div class="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <h4 class="text-xl font-bold text-gray-800 mb-4">${day}</h4>
      <ul class="space-y-3">
        ${exercises.map((ex, i) => generateRoutineItemHTML(ex, slugifyForId(day), i)).join('')}
      </ul>
    </div>
  `;
  content.innerHTML = html;
}

/* ===========================
   BASE FILTROS / VIDEOS
=========================== */
function checkBasePassword() {
  const input = document.getElementById('basePasswordInput');
  const raw = (input?.value || '').trim().toLowerCase();
  if (!raw) return;

  const code = codificar(raw);
  if (code === ADMIN_PASSWORD_HASH) {
    document.getElementById('basePasswordSection').style.display = 'none';
    if (typeof renderFilterButtons === 'function') renderFilterButtons();
    if (typeof renderExerciseList === 'function') renderExerciseList('all');
    document.getElementById('baseContent').style.display = 'block';
    input.value = '';
  } else {
    alert('Contraseña incorrecta para acceder a la base de entrenamientos.');
    input.value = '';
    input.focus();
  }
}

function filterExercises(category) {
  // actualizar estilos de botones
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white');
    btn.classList.add('bg-gray-200', 'text-gray-700');
  });
  // aplica al botón clicado
  if (event && event.target) {
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-blue-600', 'text-white');
  }
  loadExercises(category);
}

function loadExercises(category) {
  const list = document.getElementById('exerciseList');
  let html = '';

  if (category === 'all') {
    for (const [cat, exercises] of Object.entries(exerciseDatabase)) {
      html += `
        <div class="mb-6">
          <h4 class="text-lg font-bold text-blue-800 mb-3 capitalize">${cat}</h4>
          <div class="grid gap-2">
            ${exercises.map(ex => createExerciseItem(ex)).join('')}
          </div>
        </div>
      `;
    }
  } else {
    const exercises = exerciseDatabase[category] || [];
    html += `
      <div class="grid gap-2">
        ${exercises.map(ex => createExerciseItem(ex)).join('')}
      </div>
    `;
  }

  list.innerHTML = html;
}

function createExerciseItem(exercise) {
  const hasVideo = exercise.videoId && exercise.videoId.trim() !== '';
  return `
    <div class="exercise-item p-4 border border-gray-200 rounded-lg">
      <div class="flex justify-between items-start mb-2">
        <h5 class="font-medium text-gray-800 text-lg">${exercise.name}</h5>
        ${hasVideo
          ? `<button onclick="openVideo('${exercise.videoId}')" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors ml-4 flex-shrink-0">Ver Video</button>`
          : `<span class="text-gray-400 text-sm ml-4 flex-shrink-0">Video próximamente</span>`
        }
      </div>
      <p class="text-gray-600 text-sm leading-relaxed">${exercise.description}</p>
    </div>
  `;
}

function openVideo(videoId) {
  const raw = (videoId || '').toString().trim();
  const isUrl = /^https?:\/\//.test(raw);
  const url = isUrl ? raw : `https://drive.google.com/file/d/${raw}/view`;
  window.open(url, '_blank');
}

// AUSAZKO HIZTEGIA ALEATORIO IT + RU
// Parte A (AUSAZKO HIZTEGIA ALEATORIO IT + RU)
const diccionarioParteA = {
  f: "tiramisu",
  7: "napoli",
  x: "casanova",
  b: "napolitana",
  3: "laguna",
  q: "matrioska",
  z: "spaghetti",
  0: "zarina",
};

// Parte B (AUSAZKO HIZTEGIA ALEATORIO IT + RU)
const diccionarioParteB = {
  n: "russia",
  9: "samovar",
  c: "tundra",
  l: "yogurt",
  5: "batata",
  h: "opera",
  v: "gelato",
  2: "octavo",
};

// Parte C (AUSAZKO HIZTEGIA ALEATORIO IT + RU)
const diccionarioParteC = {
  j: "piazza",
  y: "borschino",
  1: "firenze",
  d: "gondola",
  m: "balalaika",
  u: "quarzo",
  4: "hermitage",
  g: "kremlin",
};

// Parte D (AUSAZKO HIZTEGIA ALEATORIO IT + RU)
const diccionarioParteD = {
  e: "dolcevita",
  6: "lagosta",
  o: "urali",
  a: "vesuvio",
  k: "islandia",
  p: "borscht",
  r: "limoncello",
  s: "espresso",
  t: "amore",
  w: "dolce",
  i: "siberia",
  8: "roma"
};

// === AUSAZKO HIZTEGIA ALEATORIO IT + RU FINAL (unione di tutto) ===
const diccionario = {
  ...diccionarioParteA,
  ...diccionarioParteB,
  ...diccionarioParteC,
  ...diccionarioParteD
};

// === Helpers de codificación/decodificación ===
function codificar(texto) {
  return texto
    .toLowerCase()
    .split("")
    .map(c => diccionario.hasOwnProperty(c) ? diccionario[c] : c)
    .join("-");
}

function decodificar(textoCodificado) {
  const reverseDic = Object.fromEntries(
    Object.entries(diccionario).map(([k, v]) => [v, k])
  );
  return textoCodificado
    .split("-")
    .map(p => reverseDic[p] ?? p)
    .join("");
}


// ---------------------------
// Rutina helpers: matching + botón + descripción
// ---------------------------
function slugifyForId(text) {
  return (text || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeForAttr(str) {
  return (str || '').toString().replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function splitExerciseLine(line) {
  const raw = (line || '').toString().trim();
  const m = raw.match(/^(.+?)\s+(\d.*)$/);
  if (m) {
    return { namePart: m[1].trim(), detailsPart: m[2].trim() };
  }
  return { namePart: raw, detailsPart: '' };
}

function normalizeStr(s) {
  return (s || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const STOPWORDS = new Set(['el','la','los','las','de','del','con','en','y','a','para','al','una','un','por','las','lo']);
function tokenize(s) {
  return normalizeStr(s)
    .split(' ')
    .filter(t => t && !STOPWORDS.has(t) && t.length > 1);
}

function singularizeToken(t) {
  if (t.length > 4 && t.endsWith('s')) return t.slice(0, -1);
  return t;
}

function canonicalizeFragment(s) {
  let x = normalizeStr(s);
  // Reglas simples de sinónimos/normalización
  x = x.replace(/estocadas bulgaras/g, 'sentadilla bulgara');
  x = x.replace(/sentadillas bulgaras/g, 'sentadilla bulgara');
  x = x.replace(/sentadillas sumo/g, 'sentadillas sumo'); // no-op pero deja explícito
  return x;
}

function flattenExerciseDatabase() {
  const all = [];
  for (const list of Object.values(exerciseDatabase)) {
    for (const ex of list) all.push(ex);
  }
  return all;
}

const EXERCISE_INDEX = flattenExerciseDatabase();

function findExerciseByNameFragment(fragment) {
  const fCanon = canonicalizeFragment(fragment);
  const fNorm = normalizeStr(fCanon);
  if (!fNorm) return null;
  let fTokens = tokenize(fCanon).map(singularizeToken);
  let best = null;
  let bestScore = -Infinity;
  for (const ex of EXERCISE_INDEX) {
    const nNorm = normalizeStr(ex.name);
    if (!nNorm) continue;
    // Exacto normalizado
    if (nNorm === fNorm) {
      return ex;
    }
    const nTokens = tokenize(ex.name).map(singularizeToken);
    if (fTokens.length === 0 || nTokens.length === 0) continue;
    const setN = new Set(nTokens);
    let overlap = 0;
    for (const t of fTokens) if (setN.has(t)) overlap++;
    if (overlap === 0) continue;
    // Requerir coincidencia de múltiples tokens cuando hay 2+ en consulta
    if (fTokens.length >= 2 && overlap < 2) continue;
    const extra = nTokens.length - overlap; // menos extra, mejor
    const score = overlap * 100 - extra * 2 - Math.abs(nNorm.length - fNorm.length) * 0.1;
    if (score > bestScore) {
      bestScore = score;
      best = ex;
    }
  }
  return best;
}

function generateRoutineItemHTML(exLine, daySlug, index) {
  const { namePart, detailsPart } = splitExerciseLine(exLine);
  const match = findExerciseByNameFragment(namePart);
  const safeName = escapeForAttr(namePart);
  const inlineDetails = formatDetailsInline(detailsPart);
  const desc = (match && match.description) ? match.description : 'Sin descripción disponible.';
  return `
    <li class=\"text-gray-700\">\n      <button class=\"w-full text-left bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-3 hover:from-blue-100 hover:to-blue-200 transition-colors\"\n              onclick=\"onRoutineExerciseClick('${safeName}')\">\n        <div class=\"font-semibold text-blue-900\">${namePart}${inlineDetails ? ` <span class=\\\"font-normal text-blue-800\\\">${inlineDetails}</span>` : ''}</div>
      </button>
      <div class=\"mt-2\">\n        <div class=\"text-gray-700 text-xs bg-white border border-blue-100 rounded-lg p-3\">${desc}</div>
      </div>
    </li>
  `;
}

function formatDetailsInline(details) {
  const raw = (details || '').toString().trim();
  if (!raw) return '';
  const m = raw.match(/^(\d+)\s*x\s*([0-9]+(?:-[0-9]+)*)\s*(.*)$/i);
  if (!m) return raw ? raw : '';
  const sets = parseInt(m[1], 10);
  const repsSpec = m[2];
  const tail = m[3] ? ' ' + m[3].trim() : '';
  const nums = repsSpec.split('-').filter(Boolean);
  let repsOut = '';
  if (nums.length === 1) {
    repsOut = Array.from({ length: Math.max(1, sets) }, () => nums[0]).join('-');
  } else if (nums.length === 2) {
    repsOut = Array.from({ length: Math.max(1, sets) }, () => nums[0]).join('-');
  } else {
    repsOut = repsSpec;
  }
  return `${sets} x ${repsOut}${tail}`;
}

function onRoutineExerciseClick(nameFragment) {
  const ex = findExerciseByNameFragment(nameFragment);
  if (ex && ex.videoId && ex.videoId.toString().trim() !== '') {
    openVideo(ex.videoId);
    return;
  }
  alert('Aún no encontré ese ejercicio en la base.');
}

/* ===========================
   EVENTOS GLOBALES
=========================== */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeUserAccessModal();
    closeExerciseBase();
    closeUserTraining();
  }
  if (e.key === 'Enter' && document.getElementById('userAccessModal').classList.contains('show')) {
    checkUserPassword();
  }
  if (e.key === 'Enter' && document.getElementById('basePasswordSection').style.display !== 'none') {
    checkBasePassword();
  }
});

