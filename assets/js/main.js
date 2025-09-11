/* ===========================
   BASE DE DATOS DE EJERCICIOS
=========================== */
const exerciseDatabase = {
  piernas_general: [
    { name: "Aductores Sentado", videoId: "https://drive.google.com/file/d/1Xfs-vaGua4Nn0mW--xZh8y5dgd6cD_rb/view?usp=drivesdk", description: "Acá te vas a concentrar en la parte interna del muslo. Abrí bien las piernas y buscá un estiramiento grande antes de cerrar fuerte. Sentí cómo los aductores se cargan con cada repetición: densidad y fuerza en la zona media de las piernas." },
    { name: "Buenos Días en Smith", videoId: "https://drive.google.com/file/d/1NrKBja118-ToX05Ocs6VkAn8z8UKG73J/view?usp=drivesdk", description: "Movimiento de bisagra guiadoue te da seguridad para cargar pesado. Dejá que los isquios y glúteos se estiren al máximo y después subí explosivo. La máquina te sostiene, así que podés enfocarte 100% en sentir el trabajo en los femorales." },
    { name: "Buenos Días", videoId: "https://drive.google.com/file/d/1VAWnHjTmp-EW7v_37kv8G_v4oDMueuZ2/view?usp=drivesdk", description: "Versión libre, más técnica y exigente. Bajá controlado, aprovechando al máximo el estiramiento de los femorales, y subí fuerte. Te va a dar un grosor increíble en la cadena posterior, desde glúteos hasta espalda baja." },
    { name: "Escalera Mecánica", videoId: "https://drive.google.com/file/d/1-KDVoR0MztijwMCgCJ1qfbcK_NjNvnWj/view?usp=drivesdk", description: "Trabajo continuo que combina cardio con hipertrofia. El estímulo recae en glúteos, cuádriceps y gemelos, manteniendo tensión constante y volumen extra sin impacto. No es solo cardio..." },
    { name: "Prensa", videoId: "https://drive.google.com/file/d/1O-YMrJVc7pndxpuATZbXboeulDQ5kxS0/view?usp=drivesdk", description: "Ejercicio base de pierna para aplicar cargas altas y trabajar seguro. i colocás los pies bajos, vas a reventar los cuádriceps; más altos, vas a sumar glúteos e isquios. Lo importante: bajar profundo y empujar fuerte. Ideal para crecer con seguridad." },
    { name: "Sentadilla Búlgara con Barra", videoId: "https://drive.google.com/file/d/1bcNRv0NWafCWN4fOvb0hzJLBpMw4qwwf/view?usp=drivesdk", description: "Unilateral avanzado para desarrollar fuerza, masa y corregir desbalances. Carga directa en cuádriceps y glúteos, con isquiotibiales como soporte. Al ser con barra, permite progresar en pesos altos y llevar cada pierna a un esfuerzo total." },
    { name: "Sentadilla Búlgara con Mancuernas", videoId: "https://drive.google.com/file/d/1VkcnF9SA-YNYQazHOPzGiGZGWPawJ6Od/view?usp=drivesdk", description: "Variante accesible que mantiene el mismo estímulo unilateral. Enfocada en cuádriceps y glúteos, permite mayor control del movimiento y es excelente para trabajar al fallo con seguridad." },
    { name: "Sentadilla Búlgara en Smith", videoId: "https://drive.google.com/file/d/1GKxgnnkTyBZoxVCy4ynY1VgpomFN0Xfu/view?usp=drivesdk", description: "Opción guiada que suma estabilidad y control, sin perder el estímulo intenso sobre cuádriceps y glúteos. Permite bajar profundo, cargar más y enfocarse en la contracción sin preocuparse por el equilibrio." },
    { name: "Sentadillas con Barra", videoId: "https://drive.google.com/file/d/1JJjXOHws6I_5XXMLgyTenU_tdDynfhiY/view?usp=drivesdk", description: "El rey de los ejercicios de pierna. Trabaja todo: cuádriceps, glúteos, femorales y core. La clave está en bajar profundo, priorizando el estiramiento muscular y subir explosivo. Es el ejercicio más completo para construir masa y fuerza." },
    { name: "Tracción con Barra en Rack", videoId: "https://drive.google.com/file/d/1c0rJzJ3VDuIqTh1rJLIEHUkSovgeLBfn/view?usp=drivesdk", description: "Ejercicio de tirón que fortalece la parte alta de la cadena posterior. Estimula principalmente dorsales y trapecios, con soporte de core y erectores. Perfecto para sumar grosor y mejorar la postura general." }
  ],
  cuadriceps: [
    { name: "Estocadas Caminando con Mancuernas", videoId: "https://drive.google.com/file/d/1lq4UD_oqMliGlhKZ9t660RVQS4C-pvYI/view?usp=drivesdk", description: "Ejercicio dinámico que trabaja principalmente cuádriceps y glúteos, además de mejorar estabilidad y coordinación. Al avanzar, generá un estiramiento profundo y una contracción intensa en la pierna de apoyo." },
    { name: "Estocadas con Barra", videoId: "https://drive.google.com/file/d/1dLEdj1RnS4MjDJPkeNe-JWIBsmB6yeS2/view?usp=drivesdk", description: "Trabajo estático de fuerza. La barra sobre la espalda te permite cargar más peso mientras el cuádriceps de la pierna adelantada soporta la mayor parte del esfuerzo en cada bajada." },
    { name: "Estocadas en Cajón con Barra", videoId: "https://drive.google.com/file/d/1EY6HibAVLeP8YjrghGgMpJvRwp-gZFo2/view?usp=drivesdk", description: "Variante elevada que aumenta el rango de movimiento y la activación del cuádriceps. Esto lleva al cuádriceps a un estiramiento más amplio y lo fuerza a contraer fuerte para impulsarte de regreso." },
    { name: "Estocadas en Smith", videoId: "https://drive.google.com/file/d/1dlBtABwW52_JcOt0U_H-308HrKYT85PD/view?usp=drivesdk", description: "Estocadas en máquina Smith para mayor estabilidad y control del movimiento. Podés concentrarte en bajar profundo y mantener tensión continua en los cuádriceps sin preocuparte del equilibrio." },
    { name: "Estocadas Hacia Atrás con Mancuernas", videoId: "https://drive.google.com/file/d/19XjPqTcYstRyQx54wfJBpqBkhTuKUxP8/view?usp=drivesdk", description: "Al llevar la pierna hacia atrás, reducís carga en rodillas y enfocás más el esfuerzo en el cuádriceps de la pierna adelantada. Movimiento controlado y muy efectivo." },
    { name: "Extensión de Cuádriceps Sentado", videoId: "https://drive.google.com/file/d/1T8t9ijRwlMtma4bOkoJh3aOiy5nxEzoJ/view?usp=drivesdk", description: "EAislamiento total del cuádriceps. Desde el estiramiento en la parte baja hasta la contracción explosiva arriba, es ideal para dar forma y definición al muslo." },
    { name: "Sentadillas en Hack", videoId: "https://drive.google.com/file/d/1hSkUvjYajDfj8H2aMbIjHEef8v7nP6DP/view?usp=drivesdk", description: "Con la espalda apoyada, podés bajar profundo y cargar más peso con seguridad. El foco está en los cuádriceps, que trabajan de lleno durante todo el recorrido." },
    { name: "Sentadillas en Smith", videoId: "https://drive.google.com/file/d/1WQPQoAHSwoyHccV5u-OP1e1p7MhEX5_E/view?usp=drivesdk", description: "El recorrido fijo ayuda a mantener técnica constante. Bajá hasta profundidad controlada para que los cuádriceps se lleven el trabajo principal." },
    { name: "Sentadillas Frontales", videoId: "https://drive.google.com/file/d/1y0w4ZGpMrl-xdws2aI0qF8GIvcKzgM4w/view?usp=drivesdk", description: "Al tener la barra adelante, el torso se mantiene más recto y los cuádriceps son los que dominan el esfuerzo. Excelente para volumen y postura." },
    { name: "Sentadillas Frontales en Smith", videoId: "https://drive.google.com/file/d/1_5Ke5te3PGmPWiwEf86TLZwfg7Howyy9/view?usp=drivesdk", description: "Variante guiada que permite mantener el ángulo del torso estable. Los cuádriceps trabajan de forma continua en cada bajada y subida." },    
    { name: "Sentadilla Búlgara con Mancuernas", videoId: "https://drive.google.com/file/d/1VkcnF9SA-YNYQazHOPzGiGZGWPawJ6Od/view?usp=drivesdk", description: " Unilateral que combina equilibrio y fuerza. El cuádriceps de la pierna de apoyo se estira y contrae intensamente en cada repetición, logrando un estímulo profundo." },
    { name: "Sentadilla Búlgara en Smith", videoId: "https://drive.google.com/file/d/1GKxgnnkTyBZoxVCy4ynY1VgpomFN0Xfu/view?usp=drivesdk", description: "Con el movimiento guiado, podés bajar más controlado y progresar en carga sin perder estabilidad. El cuádriceps se lleva la mayor parte del esfuerzo." },
  ],
  gluteos: [
    { name: "Hip Thrust con Barra", videoId: "https://drive.google.com/file/d/1gKxoZqdESY6vpSnIvvZKjN1a1agdJAci/view?usp=drivesdk", description: "Ejercicio clave para activar y desarrollar los glúteos. El foco está en la extensión de cadera: bajá controlado hasta estirar bien y subí contrayendo fuerte arriba." },
    { name: "Hip Thrust en Smith", videoId: "https://drive.google.com/file/d/1fcOHHb6YXseRaX915WdGt63f_hCpNd9F/view?usp=drivesdk", description: "La máquina guía el recorrido y te da estabilidad, lo que permite cargar más y concentrarte en llevar los glúteos a la máxima contracción en cada repetición." },
    { name: "Hiperextensión 45 Grados Glúteos", videoId: "https://drive.google.com/file/d/1mcMH-_YV4T6eGWYM9UNNF5p7_7a7odeX/view?usp=drivesdk", description: "Al ajustar la técnica podés dirigir el esfuerzo hacia los glúteos. Enfocate en sentir cómo se estiran al bajar y cómo se activan con fuerza al subir." },
    { name: "Sentadillas Sumo con Barra", videoId: "https://drive.google.com/file/d/1ijW2ft50ijZHSYpeHHucUNmt_f7WPz9I/view?usp=drivesdk", description: "Postura amplia (pies bien abiertos y las puntas hacia afuera), los glúteos se llevan gran parte del trabajo. Bajá profundo para aprovechar el estiramiento y subí de forma explosiva." },
    { name: "Sentadillas Sumo con Mancuerna", videoId: "https://drive.google.com/file/d/1gsNRrtMEClU8Ze2p16v7Iw9KP8_AAokY/view?usp=drivesdk", description: "Postura amplia (pies bien abiertos y las puntas hacia afuera), sosteniendo una mancuerna al frente. Excelente para trabajar glúteos y aductores con control, manteniendo la tensión durante todo el recorrido." },
  ],
  isquiotibiales: [
    { name: "Isquiotibiales Acostado", videoId: "https://drive.google.com/file/d/1odYrViuAw6cmLfBHLcdmXf9ZCwFArVn5/view?usp=drivesdk", description: "Curl en máquina que aísla de forma directa a los femorales. Al flexionar la rodilla llevás todo el esfuerzo a los isquios, logrando una contracción intensa y controlada." },
    { name: "Isquiotibiales Sentado", videoId: "https://drive.google.com/file/d/1zAQmYSac4XFv5XI6Q8XT8PM62uAWCktk/view?usp=drivesdk", description: "Al estar en posición sentada, los isquios trabajan desde un mayor estiramiento. Esto permite un estímulo más completo, aprovechando tanto la fase excéntrica como la contracción." },
    { name: "Peso Muerto Convencional", videoId: "https://drive.google.com/file/d/1aPLT_cpIJsnW3ECUt4SuMFcbmq_uf-Em/view?usp=drivesdk", description: "Básico para toda la cadena posterior. Los isquios, glúteos y espalda baja se activan en conjunto. La clave está en bajar con control, sintiendo el estiramiento, y subir con fuerza." },
    { name: "Peso Muerto en Smith", videoId: "https://drive.google.com/file/d/1c4Jo6YVM9U3fnX3h3Sd5XF0Khz5czfFg/view?usp=drivesdk", description: "La máquina guía el movimiento, dándote seguridad. Ideal para enfocarte en los femorales sin preocuparte por la estabilidad, manteniendo un trabajo intenso en cada repetición." },
    { name: "Peso Muerto Rumano con Mancuernas", videoId: "https://drive.google.com/file/d/1q6qQz9xBcp4flUc56_NFAAXLHT--QjJl/view?usp=drivesdk", description: "Con mancuernas tenés más libertad de recorrido. Esto te permite un estiramiento profundo de los isquios y una contracción fuerte en la subida." },
    { name: "Peso Muerto Rumano con Barra", videoId: "https://drive.google.com/file/d/1-js5MRBFdvc0_ndj-JcGQvvshafVfkML/view?usp=drivesdk", description: "Clásico para femorales y glúteos. El énfasis está en la fase de bajada, donde los isquios se estiran al máximo antes de contraerse con potencia." },
    { name: "Peso Muerto Sumo", videoId: "https://drive.google.com/file/d/1VwAWOXxQ8yKTP1pH3F_4Lz0wA7DqxxVR/view?usp=drivesdk", description: "Al abrir la postura, se activa con fuerza la cadera y los glúteos, pero los isquios también cumplen un papel clave en la tracción. Excelente para levantar pesado." },
    { name: "Peso Muerto Unilateral con Mancuerna", videoId: "https://drive.google.com/file/d/1GIX9pgMkaB2dJ4m_kxutVxeZ8U5aHl25/view?usp=drivesdk", description: "Trabajo a una pierna que exige equilibrio y control. El isquio de apoyo se lleva toda la carga, combinando fuerza y estabilidad." },
  ],
  pantorrillas: [
    { name: "Gemelos de Pie en Máquina", videoId: "https://drive.google.com/file/d/1aQETMdpISa2jkX-xavke3vrNxDkLNWsS/view?usp=drivesdk", description: "Elevaciones de talones en máquina específica. Permite trabajar con cargas altas, aprovechando el estiramiento profundo abajo y cerrando con una contracción fuerte arriba." },
    { name: "Gemelos de Pie en Smith", videoId: "https://drive.google.com/file/d/18cuDm9I82ayxF4hSlcQpaQr45T77M3gn/view?usp=drivesdk", description: "Con la barra en la máquina Smith realizás elevaciones de pie con control y seguridad. La clave está en bajar bien hasta el estiramiento y subir explosivo." },
    { name: "Gemelos en Prensa", videoId: "https://drive.google.com/file/d/1RkueB6PvBvuPz_RGfh3Hl70qWxGvqi_L/view?usp=drivesdk", description: "Apoyando solo la punta de los pies en la prensa, empujás hacia arriba tras un estiramiento completo. Es cómodo, seguro y permite cargar mucho para fatigar al máximo el músculo." },
    { name: "Sóleo Sentado con Mancuerna Unilateral", videoId: "https://drive.google.com/file/d/1XV-CutHJNkqvY7fSJaMLfKvlHUe2EMqY/view?usp=drivesdk", description: "Con una mancuerna sobre el muslo, trabajás un pie por vez. El sóleo recibe todo el estímulo, especialmente si bajás lento hasta el estiramiento y subís potente." },
    { name: "Sóleo Sentado en Máquina", videoId: "https://drive.google.com/file/d/1J7hUeQvPKwawBx0jLgWB5hfuM8DJKK21/view?usp=drivesdk", description: "La máquina guía el recorrido y te permite trabajar el sóleo con carga alta. Enfatizá la bajada profunda para maximizar el estímulo de crecimiento." },
    { name: "Sóleo Sentado con Mancuernas", videoId: "https://drive.google.com/file/d/1qNB7Mbho6e87D3JqxBXzrjIKM8RgcfTQ/view?usp=drivesdk", description: "Apoyando mancuernas sobre los muslos, hacés elevaciones sentado. El foco está en el estiramiento al bajar y la contracción completa al subir." },
  ],
  pectorales: [
    { name: "Aperturas de Pie con Poleas", videoId: "https://drive.google.com/file/d/1YvjiQlolKpKn3DQ8RY2REs56zhyr4Twj/view?usp=drivesdk", description: "Con poleas de pie, el pectoral se mantiene bajo tensión constante. Abrí lento hasta sentir el estiramiento total y cerrá juntando fuerte los brazos." },
    { name: "Aperturas en Banca con Mancuernas", videoId: "https://drive.google.com/file/d/1e0QWbSnb4TfNX2nn8bzzeIQR1FxkLHdx/view?usp=drivesdk", description: "Acostado en banca, bajá los brazos bien abiertos para estirar al máximo el pecho y subí concentrando toda la fuerza en la contracción." }, 
    { name: "Aperturas en Banca Inclinado con Mancuernas", videoId: "https://drive.google.com/file/d/1QadKUn1fZcpZjJJUajfcxMR2lsKIrMhS/view?usp=drivesdk", description: "Con el banco inclinado, el trabajo se enfoca en la parte superior del pectoral. Llevá las mancuernas abajo controlando el estiramiento y cerrá potente." },
    { name: "Aperturas Sentado en Máquina", videoId: "https://drive.google.com/file/d/1-2WvTtJ9Rcp84JA-WiV9RxowNBqW7kOd/view?usp=drivesdk", description: "La máquina guía el movimiento, lo que te permite abrir amplio para estirar el pecho y luego cerrar con máxima contracción." },
    { name: "Flexiones BB Amplias (Pecho)", videoId: "https://drive.google.com/file/d/1C5XkxyDmjH3FmhAucPBrXT9EzY4_pVy4/view?usp=drivesdk", description: "Al separar más las manos, el esfuerzo recae directo en el pectoral. Bajá profundo para sentir la apertura y empujá fuerte en la subida." },
    { name: "Flexiones BB con Rodillas Apoyadas", videoId: "11_NOPs-https://drive.google.com/file/d/1x7VwrtJ-l9ZuQjx5bOzC3VDn-PaBnz5l/view?usp=drivesdk", description: "Variante más accesible, ideal para aprender a bajar controlado y estirar el pectoral antes de empujar hacia arriba." },
    { name: "Flexiones BB Declinado", videoId: "https://drive.google.com/file/d/1dniWxfrI77S5zUw0vtOGpISbyifiF4Eh/view?usp=drivesdk", description: "Con los pies elevados, el pecho superior trabaja más. Bajá despacio hasta el estiramiento y subí explosivo." },
    { name: "Flexiones BB Inclinado", videoId: "https://drive.google.com/file/d/12NqNrFdHV3C2pZop4CSocxjW18UAEQip/view?usp=drivesdk", description: "Con las manos en alto, el esfuerzo es más liviano pero seguí buscando bajar profundo y estirar bien antes de la contracción." },
    { name: "Flexiones BB Profundas", videoId: "https://drive.google.com/file/d/10Ow9-8p-hG2JDbRVYF4wfAmQNWra3_53/view?usp=drivesdk", description: "Al aumentar el rango de movimiento, el pectoral se estira más. Esa apertura extra es clave para que el músculo crezca." },
    { name: "Flexiones BB", videoId: "https://drive.google.com/file/d/1t8WpW9earph-8i_7R3apxC8laS9cjAsd/view?usp=drivesdk", description: "La versión clásica: bajá controlado hasta sentir cómo se abre el pectoral y subí contrayendo fuerte." },
    { name: "Fondos para Pecho", videoId: "https://drive.google.com/file/d/1Id235vxbnHTg9FirBqaK3UoGo-7YIF-v/view?usp=drivesdk", description: "Inclinando el torso hacia adelante, el pecho recibe el mayor estímulo. Bajá bien hasta el estiramiento y subí con potencia." },
    { name: "Fondos Sentado en Máquina", videoId: "https://drive.google.com/file/d/14vrZVe2Jv0psm3O7oot-tmpJ-I5rcW01/view?usp=drivesdk", description: "La máquina fija el recorrido, lo que permite bajar profundo y apretar con fuerza el pectoral en la subida." },
    { name: "Peck Deck", videoId: "https://drive.google.com/file/d/1DoDvxFJxur603NTiaqNY6tLo1Xf0azMz/view?usp=drivesdk", description: "La máquina aísla el pecho por completo. Abrí hasta sentir la máxima apertura y luego juntá los brazos fuerte." },
    { name: "Press Banca con Mancuernas", videoId: "https://drive.google.com/file/d/1v17dS875CBZJTn2g3BmrN1kr1UiTZhRx/view?usp=drivesdk", description: "Al empujar mancuernas, podés bajar más profundo que con barra. Aprovechá ese estiramiento antes de subir explosivo." },
    { name: "Press Banca en Smith", videoId: "https://drive.google.com/file/d/1Rh3w4gsBNZiW1t_MlBjn0Ts7qmy-BdR2/view?usp=drivesdk", description: "Con recorrido guiado, podés bajar controlado hasta estirar el pectoral y empujar con seguridad hacia arriba." },
    { name: "Press Banca Inclinado con Mancuernas", videoId: "https://drive.google.com/file/d/1JHa8aWpRj6Xb-yvFFunIfVD02y7Z5OQr/view?usp=drivesdk", description: "La inclinación enfoca la parte alta del pecho. Bajá lento hasta que se abra bien el pectoral y cerrá apretando fuerte." },
    { name: "Press Banca Inclinado en Smith", videoId: "https://drive.google.com/file/d/1kPXVZvhTC1iG31uM7roy6N7_FTlnSD5i/view?usp=drivesdk", description:  "Con la máquina Smith asegurás el control. Bajá profundo para activar el estiramiento y subí empujando con potencia." },
    { name: "Press Banca Inclinado", videoId: "https://drive.google.com/file/d/11_NOPs-spDqtlbvosMbgEIUl2gLLSDTk/view?usp=drivesdk", description: "Clásico para el pecho superior. La clave es bajar controlado hasta la apertura completa y luego empujar con fuerza." },
    { name: "Press Banca", videoId: "https://drive.google.com/file/d/1NS075GrkodFk4sNNy2uNZFJgHTPvjcWh/view?usp=drivesdk", description: "El clásico del entrenamiento de pecho. Aprovechá la bajada para estirar bien y subí con potencia para trabajar todo el pectoral." },
    { name: "Press de Pecho en Máquina con Discos", videoId: "https://drive.google.com/file/d/1iBzZBR_Hm5lJJb2X_i8XOTdUePS3gGoM/view?usp=drivesdk", description: "Guiado y seguro, lo importante es bajar hasta el estiramiento total del pecho y subir controlado contrayendo." },
    { name: "Press de Pecho en Máquina", videoId: "https://drive.google.com/file/d/1sd75Zvm2X9dhb0RwCsUMRVloZIg6uRbG/view?usp=drivesdk", description: "Con movimiento fijo, podés concentrarte en estirar profundo y apretar al máximo en cada repetición." },
    { name: "Press de Pecho Inclinado en Máquina con Discos", videoId: "https://drive.google.com/file/d/1E-JiJTMYmlhlrBiRUPclwET4GjjtKtEG/view?usp=drivesdk", description: "Ángulo inclinado que estimula el pecho superior. Bajá lento hasta el estiramiento y subí con fuerza." },
    { name: "Press Martillo Acostado con Mancuernas", videoId: "https://drive.google.com/file/d/1fLxLI_G-HX7ycMpe_UxqZAbP-_zukIYd/view?usp=drivesdk", description: "Con agarre neutro reducís carga en hombros, pero igual es clave bajar profundo para estirar el pecho antes de contraer." },
  ],
  espalda: [
    { name: "Remo Unilateral Sentado en Máquina con Polea (Dorsal Ancho)", videoId: "https://drive.google.com/open?id=1TapO4YcmeyxhmIyaGs0kPi7iHKnHN-xI&usp=drive_copy", description: "Trabajás un lado por vez, lo que te permite concentrarte en el estiramiento del dorsal y luego tirar fuerte hasta contraerlo al máximo." },
    { name: "Remo Unilateral Sentado en Máquina (Dorsal Ancho)", videoId: "https://drive.google.com/open?id=1pMsH33QgweJUDgynCPvgMevlE4f4UlJw&usp=drive_copy", description: "La máquina te da estabilidad para que cada repetición se enfoque en abrir bien el dorsal y cerrarlo con potencia." },
    { name: "Remo Unilateral Sentado en Máquina (Dorsal Ancho) - Variable", videoId: "https://drive.google.com/open?id=1gEY-UOwUdB7cFM_aU3CtuL0NDJpuso6t&usp=drive_copy", description: "Al cambiar el ángulo de tracción, atacás distintas fibras del dorsal. Siempre buscá abrir al máximo antes de cerrar fuerte." },
    { name: "Remo T", videoId: "https://drive.google.com/open?id=19TWPpxpMD8qJ0Z2ovLG58bYMBLpJJyHX&usp=drive_copy", description: "Ejercicio pesado que desarrolla grosor en la espalda media. La clave es bajar lento, estirando dorsales y trapecios, y luego tirar explosivo hacia el torso." },
    { name: "Remo T con Barra con Triángulo", videoId: "https://drive.google.com/open?id=1Nt1T0egiLZZF9JzDE-GEQtOv7qnhBVUd&usp=drive_copy", description: "Con el agarre triangular, llevás el peso hacia el centro del cuerpo. Mantené la espalda estirada y al final contraé fuerte entre escápulas." },
    { name: "Remo Sentado en Máquina con Triángulo", videoId: "https://drive.google.com/open?id=1ZRSL08FmAobvV-1Sc8cqeHROAtG8uqSM&usp=drive_copy", description: "El agarre neutro hace cómodo el recorrido. Tirás desde el estiramiento completo del dorsal hasta la contracción final en la espalda media." },
    { name: "Remo Sentado en Máquina con Triángulo con Extensión", videoId: "https://drive.google.com/open?id=1hCTmAyEyiVO50e3U1TXvKIKN3pNId0t5&usp=drive_copy", description: "Incluye una extensión extra al final del recorrido, lo que te da un rango mayor. Abrí amplio y cerrá hasta juntar las escápulas." },
    { name: "Remo Sentado en Máquina con Barra", videoId: "https://drive.google.com/open?id=1PstNT8ld0l27DpMmzmjWF9kahy9LVBn9&usp=drive_copy", description: "Trabajo simétrico para toda la espalda. Estirá los brazos para abrir dorsales y cerrá con fuerza hasta el abdomen." },
    { name: "Remo Sentado en Máquina con Barra Amplio", videoId: "https://drive.google.com/open?id=16F1U_aZcqa3FK6NYVAkCVZqSEy9m0ww3&usp=drive_copy", description: "Con agarre más abierto, el foco va hacia romboides y trapecios. La clave es tirar desde el estiramiento hasta juntar las escápulas." },
    { name: "Remo Sentado en Máquina (Dorsal Ancho)", videoId: "https://drive.google.com/open?id=1OAca-JvfUFn51UnT9epeaXizZDaQDOEq&usp=drive_copy", description: "Enfocado en ensanchar la espalda. Buscá un recorrido controlado, sintiendo cómo se abre el dorsal antes de cerrarlo con potencia." },
    { name: "Remo Sentado en Máquina (Dorsal Alto)", videoId: "https://drive.google.com/open?id=1hqAhEMbH2G-Xfn5bsXqxPu1WG3RQ3xnt&usp=drive_copy", description: "El recorrido sube más alto, cargando la parte superior del dorsal. Tirás desde la apertura hasta el cierre fuerte arriba." },
    { name: "Remo en Smith", videoId: "https://drive.google.com/open?id=1QzzypvxXwE-4nrbAMWLkcqVLkr3m8yUo&usp=drive_copy", description: "Con recorrido guiado, podés enfocarte en la técnica. Bajá bien los brazos para estirar dorsales y subí potente." },
    { name: "Remo con Mancuernas", videoId: "https://drive.google.com/open?id=1ICPAVxs1pevnuLMTmjgWExayuBfsqy5k&usp=drive_copy", description: "Cada brazo trabaja libre, lo que te da mayor rango. Aprovechá esa apertura y cerrá explosivo hacia el torso." },
    { name: "Remo con Mancuernas con Apoyo", videoId: "https://drive.google.com/open?id=1WAy4wReyFIY5saZb00fcSBi1WnjM-ART&usp=drive_copy", description: "El apoyo elimina la ayuda del cuerpo. Abrí bien el dorsal en la bajada y cerrá hasta que el hombro se retraiga." },
    { name: "Remo con Mancuerna Unilateral", videoId: "https://drive.google.com/open?id=1zTI6gdMFtbtEhVcYou-HTEvc17gTq3PM&usp=drive_copy", description: "Trabajás un lado por vez con libertad total. Bajá lento hasta el estiramiento y cerrá fuerte hacia la cadera." },
    { name: "Remo con Barra", videoId: "https://drive.google.com/open?id=1JaFW-_Xi-eNE1_bwiYecHvLBoy4G3d74&usp=drive_copy", description: "Clásico para masa en la espalda. Incliná el torso, bajá controlado y tirá hasta cerrar fuerte entre escápulas." },
    { name: "Polea al Pecho Prono", videoId: "https://drive.google.com/open?id=1_jw9RDcRWhuD5pKTeq626WUZJL6-9sb8&usp=drive_copy", description: "El clásico jalón para anchura. Abrí bien arriba y llevá la barra hasta el pecho con potencia." },
    { name: "Polea al Pecho Prono Abierto", videoId: "https://drive.google.com/open?id=1gTDO_Q3MfhgGkK41ey2iaV3eDBT2ekHW&usp=drive_copy", description: "Con agarre amplio maximizás la apertura del dorsal. Tirás desde el estiramiento completo hasta el pecho." },
    { name: "Polea al Pecho Prono Cerrado", videoId: "https://drive.google.com/open?id=1I4w_4RUem3aIEV0PS0dmelWbfr10tz2J&usp=drive_copy", description: "Al ser cerrado, el esfuerzo se concentra en la parte interna del dorsal. Bajá hasta el pecho tras un buen estiramiento." },
    { name: "Polea al Pecho con Triángulo", videoId: "https://drive.google.com/open?id=1m8LAuVpQqtKJB9fTKZV1N9pxqb6hj5t3&usp=drive_copy", description: "El agarre neutro es cómodo y seguro. Tirás desde arriba abriendo dorsales y bajás controlado hasta el cierre." },
    { name: "Polea al Pecho Supino", videoId: "https://drive.google.com/open?id=1GFhUX_VLBPjeAsr8T-TbI1rLogGrO58u&usp=drive_copy", description: "Con agarre supino, además del dorsal trabajás bíceps. Estirá arriba y bajá tirando hasta el pecho." },
    { name: "Jalón al Pecho en Máquina", videoId: "https://drive.google.com/open?id=1k4qwHp5eBLKBmDEwvnp-Mj_vNlIotT1n&usp=drive_copy", description: "Con recorrido fijo, podés bajar despacio, sentir el estiramiento y cerrar sin preocuparte por la técnica." },
    { name: "Hiperextensión de 45° (Lumbares)", videoId: "https://drive.google.com/open?id=1ZF9yr2BP0yphb1VyE31GFBiI4JZE4BlS&usp=drive_copy", description: "Se enfoca en la zona baja. Bajá controlado para estirar bien y subí contrayendo glúteos y lumbares." },
    { name: "Espalda con Polea", videoId: "https://drive.google.com/open?id=19I2YycnYqdh3z13mHaiL0M1OrnzGke-E&usp=drive_copy", description: "Versátil y adaptable. Podés variar el agarre, pero lo importante es abrir en la subida y cerrar fuerte en la bajada." },
    { name: "Encogimientos con Mancuernas (Trapecios) 25° hacia Adelante", videoId: "https://drive.google.com/open?id=1VF3vmqB2a77neHRa5LzeK2QsCiIUSOZK&usp=drive_copy", description: "Con inclinación hacia adelante, maximizás el estímulo en trapecios. Subí hasta la contracción y bajá controlado." },
    { name: "Encogimientos con Barra (Trapecios) 25° hacia Adelante", videoId: "https://drive.google.com/open?id=1UyFUZjKcd0uQTY7ClyLW0WJwFfFrDnAe&usp=drive_copy", description: "Lo mismo con barra, con posibilidad de cargar más. Subí hasta apretar fuerte los trapecios y bajá despacio." },
    { name: "Dominadas Agarre Supino", videoId: "https://drive.google.com/file/d/1iv4uVOVyUJnv4S1TbVX4bXxL_Z0FcpI-/view?usp=drivesdk", description: "Además del dorsal, cargan mucho los bíceps. Colgate, estirá completo y subí hasta llevar el pecho a la barra." },
    { name: "Dominadas Agarre Prono", videoId: "https://drive.google.com/file/d/1REN0E_arkYRaRmUbe-ERu4M28NPv6DrS/view?usp=drivesdk", description:"El rey para anchura. Colgate, bajá bien hasta el estiramiento y subí hasta que la barbilla supere la barra." },
    { name: "Dominadas Agarre Prono a los Hombros", videoId: "https://drive.google.com/file/d/1avpp8w_3ezj1jgvDN1sMlOz6K0zRYQj2/view?usp=drivesdk", description: "Variante que lleva la barra hacia los hombros. El dorsal trabaja en un rango más amplio, del estiramiento al cierre total." },
  ],
  hombros: [
    { name: "Flexiones BB para Hombros", videoId: "https://drive.google.com/open?id=1UdUrrwoTBloHrbyGAQgLEs4QeGizsPJ7&usp=drive_copy", description: "Con el peso de tu cuerpo, bajás llevando la cabeza hacia el piso y subís empujando fuerte. Un trabajo exigente que fortalece los deltoides y mejora la estabilidad." },
    { name: "Flexiones para Hombros con Banco", videoId: "https://drive.google.com/open?id=1LjkpajVcbNaEvsvjSZwRYshzAlUAKXSH&usp=drive_copy", description: "Apoyá los pies en un banco para aumentar la inclinación. Bajá controlado hasta sentir la carga en hombros y empujá explosivo arriba." },
    { name: "Press Militar con Barra Sentado", videoId: "https://drive.google.com/open?id=1b9QzfTJC-qbzhwTA02g035Z4SaCIhExZ&usp=drive_copy", description: "Con la espalda firme en el banco, llevá la barra desde el pecho hasta extender los brazos. Mové lento hacia abajo y potente hacia arriba, cargando directo los deltoides." },
    { name: "Press Militar con Mancuernas de Pie", videoId: "https://drive.google.com/open?id=1wvqNCBO8pew6a0vz3FvZ7TWsfQgDWhmo&usp=drive_copy", description: "De pie, empujá las mancuernas hacia arriba mientras el core se mantiene firme. Bajá con control para estirar el deltoide y subí hasta la extensión total." },
    { name: "Press Militar con Mancuernas Sentado", videoId: "https://drive.google.com/open?id=1VOWKx6lrXlV5aaz9-kT7BA_P9Qkuq4Bf&usp=drive_copy", description: "Sentado, llevá las mancuernas desde la altura de los hombros hasta arriba. El foco está en los deltoides sin ayuda del cuerpo, con recorrido amplio y controlado." },
    { name: "Press Militar en Máquina", videoId: "https://drive.google.com/open?id=1Ky7KRDz70QwlwGcNckTx_X7ZutKzhUAx&usp=drive_copy", description: "Con el movimiento guiado, empujás seguro y estable. Ideal para enfocarte en estirar abajo y apretar fuerte arriba sin preocuparte por la técnica." },
    { name: "Press Militar en Smith", videoId: "https://drive.google.com/open?id=1MykqH_KvQNy_fqHqCSd_95N66HVgja_0&usp=drive_copy", description: "La barra guiada te permite cargar más y bajar controlado hasta el nivel de los hombros. Subí explosivo manteniendo tensión continua en los deltoides." },
    { name: "Remo para Deltoides Posteriores", videoId: "https://drive.google.com/open?id=1nbeiWcNuPl_Qq_6oxXyG-v6Gyh3RQWTt&usp=drive_copy", description: "Tirá hacia atrás con los codos altos, abriendo bien el movimiento. La clave es sentir el estiramiento de los deltoides posteriores y cerrarlos con fuerza." },
    { name: "Vuelos Laterales con Mancuernas Sentado", videoId: "https://drive.google.com/open?id=1PnXpxF_0cci70f1tsAiMUTlB5NM0BUHJ&usp=drive_copy", description: "Al estar sentado, evitás el impulso del cuerpo. Elevá los brazos en apertura hasta la altura de los hombros, bajá despacio y repetí." },
    { name: "Vuelos Laterales con Mancuernas", videoId: "https://drive.google.com/open?id=1nUYwoKsxFQLWHm7Lu1N0SgrMFpbT-DNJ&usp=drive_copy", description: "De pie, levantá los brazos hacia los costados con un leve giro de muñeca. Buscá amplitud en el movimiento y control en la bajada." },
    { name: "Vuelos Laterales en Máquina", videoId: "https://drive.google.com/open?id=1VhY-L8rgmbfv7TxEs_Bn2U0q1PsIPwoW&usp=drive_copy", description: "El recorrido está guiado, lo que te permite enfocarte en abrir bien hasta sentir la tensión máxima en los deltoides medios." },
    { name: "Vuelos Posteriores con Mancuerna con Apoyo", videoId: "https://drive.google.com/open?id=13Xoe4OXLNYMm8ZRF1sVtgKf80of6fTep&usp=drive_copy", description: "Con el torso apoyado, elevá los brazos hacia atrás. Aislás el deltoide posterior y lo trabajás con máxima precisión." },
    { name: "Vuelos Posteriores con Mancuerna Sentado", videoId: "https://drive.google.com/open?id=1KjX4Xa17RVuHZG2pko3c5ODI1Ot75pWk&usp=drive_copy", description: "Inclinate hacia adelante y llevá los brazos abiertos hacia atrás. El movimiento corto pero controlado carga de lleno los posteriores." },
    { name: "Vuelos Posteriores con Mancuerna", videoId: "https://drive.google.com/open?id=1K3oB3zyC1Y2BTgTWwM6DdOajZVWL9e5i&usp=drive_copy", description: "De pie e inclinado, abrí los brazos hacia atrás con control. La clave está en mantener la tensión en deltoides posteriores y no balancear el torso." },
  ],
  biceps: [
    { name: "Bíceps Predicador en Máquina", videoId: "https://drive.google.com/open?id=10A6Ibuc5YcUA6dFeth8LPTvfiKDuFPWE&usp=drive_copy", description: "Con los brazos apoyados en el banco predicador, hacés la flexión sin posibilidad de impulso. Esto te obliga a trabajar solo con el bíceps, estirando bien abajo y cerrando fuerte arriba." },
    { name: "Bíceps Predicador con Mancuerna", videoId: "https://drive.google.com/open?id=1x7Y5FK-tcoRpCGF21TWFgEclo1Tbdk2M&usp=drive_copy", description:  "Unilateral: apoyás el brazo y subís la mancuerna controlada. Bajá lento para aprovechar el estiramiento y subí buscando la máxima contracción en cada repetición." },
    { name: "Bíceps Predicador con Barra W", videoId: "https://drive.google.com/open?id=1opm5waLBDBIcAYKUvNeib7vrPoZPH0lp&usp=drive_copy", description: "Con la barra W apoyada en el predicador, el agarre cómodo protege tus muñecas. La clave está en bajar despacio para sentir el estiramiento y subir apretando el bíceps al máximo." },
    { name: "Bíceps Martillo Predicador con Mancuerna", videoId: "https://drive.google.com/open?id=147Yf4ykTVUKyeNpkxg2GizESDojet-1b&usp=drive_copy", description: "Con agarre neutro en banco predicador, trabajás no solo el bíceps sino también el braquial y el antebrazo. Estirá completo abajo y subí hasta cerrar fuerte." },
    { name: "Bíceps Martillo Cruzado Alternado con Mancuernas", videoId: "https://drive.google.com/open?id=1mi4BWO_9BcwHuSG87kxJxCtCzAKXLI4z&usp=drive_copy", description:  "De pie, llevás la mancuerna en diagonal hacia el hombro contrario. Este recorrido activa bíceps y antebrazo, siempre con control en la bajada y contracción firme arriba." },
    { name: "Bíceps Martillo Alternado con Mancuernas", videoId: "https://drive.google.com/open?id=1BVCotzsql9X_vWIqFNiXUYPQuKLTO0Jq&usp=drive_copy", description: "Con agarre neutro, subís una mancuerna mientras la otra espera. El trabajo es constante en ambos brazos. Bajá lento para sentir la carga y apretá en la parte alta." },
    { name: "Bíceps Inclinado con Mancuernas", videoId: "https://drive.google.com/open?id=1R7mpleBSlJqSQhNEXz-QoNiC5az2Y67v&usp=drive_copy", description: "Sentado en banco inclinado, los brazos quedan detrás del torso. Esto pre-estira al bíceps y te da un rango mayor. Bajá hasta estirar bien y subí cerrando con fuerza." },
    { name: "Bíceps en Máquina", videoId: "https://drive.google.com/open?id=1xTQlh2CwZoGT4aV6wwH2H9JxGHHTBa5B&usp=drive_copy", description: "Con movimiento guiado, podés enfocarte solo en el bíceps. La máquina mantiene la tensión durante todo el recorrido, desde el estiramiento hasta la contracción." },
    { name: "Bíceps Concentrado", videoId: "https://drive.google.com/open?id=1t3j3SGBEmbcTXkCp1SMSoio93O0bLbPf&usp=drive_copy", description: "Apoyás el codo en la pierna y subís la mancuerna despacio. Este aislamiento puro del bíceps exige máxima concentración en estiramiento y contracción." },
    { name: "Bíceps con Mancuerna con Apoyo", videoId: "https://drive.google.com/open?id=1GgJ91vLgSUramUGhAwWrweVfWaR3RneU&usp=drive_copy", description: "Con el brazo apoyado en un banco, hacés el curl sin balanceos. Control total para sentir cómo el bíceps trabaja de inicio a fin." },
    { name: "Bíceps con Cable con Barra", videoId: "https://drive.google.com/open?id=1SQ4C1U2iWJTPKk6JRXBwyBJFIZ1Yg4s6&usp=drive_copy", description:  "En polea baja, el cable mantiene la tensión constante. Sentí cómo el bíceps no descansa ni en la parte baja ni en la alta." },
    { name: "Bíceps con Barra W", videoId: "https://drive.google.com/open?id=1X2WlvJcUaifFsecqJVae-CPwbOqQavDq&usp=drive_copy", description: "Con la barra W, el agarre es más cómodo. Subí controlado y bajá despacio, siempre manteniendo la tensión en el bíceps." },
    { name: "Bíceps con Barra W Agarre Inverso", videoId: "https://drive.google.com/open?id=1Sm4OcJwf4bs03HlYB6ow3I4Xhi2ZnKZW&usp=drive_copy", description: "Con las palmas hacia abajo, trabajás bíceps y antebrazo. Bajá lento para controlar y subí fuerte para potenciar la contracción." },
    { name: "Bíceps Alternado con Mancuernas", videoId: "https://drive.google.com/open?id=1LnGkzLPPI2u1LgAoty0O2679gk7Uv_Pl&usp=drive_copy", description: "Clásico de pie: subís una mancuerna a la vez. La clave está en bajar controlado y no perder tensión en el brazo que espera." },
    { name: "Bíceps Alternado con Mancuernas Sentado", videoId: "https://drive.google.com/open?id=1ro6qejym5YmFlK1Nx-SmOKNFT-xC8PMk&usp=drive_copy", description: "Sentado, eliminás el impulso del torso. Subí alternado cada mancuerna con foco total en la contracción y el estiramiento controlado abajo." },
  ],
  triceps: [
    { name: "Extensión de Tríceps con Polea con Apoyo", videoId: "https://drive.google.com/open?id=1-c13y0TQpuXBygsytGOGw9lMiYfkifz8&usp=drive_copy", description: "Apoyá el torso levemente hacia adelante y fijá los codos al costado. Extendé los brazos hasta abajo, estirando bien el tríceps y apretando fuerte en la contracción." },
    { name: "Extensión de Tríceps con Polea con Barra", videoId: "https://drive.google.com/open?id=165JH0I8sW0sXsqE11Z-RB1f9YSpMTlen&usp=drive_copy", description: "Con barra recta, mantené los codos pegados al cuerpo. Bajá controlado, extendé completamente y subí despacio sin perder tensión." },
    { name: "Extensión de Tríceps con Polea", videoId: "https://drive.google.com/open?id=1p6Ig9l-wj3Nk02khzEYE13XAMHJ1zQly&usp=drive_copy", description:  "Un básico de polea que mantiene el músculo trabajando todo el tiempo. Sentí la tensión continua, llevando el recorrido completo de estiramiento a contracción." },
    { name: "Flexiones BB Cerradas", videoId: "https://drive.google.com/open?id=1A8Ja7MrkGyfAuLu9rMm0Y-ygj_dGOeG-&usp=drive_copy", description: "Con las manos juntas bajo el pecho, bajá controlado y subí empujando fuerte. Esta variante traslada la carga directo al tríceps." },
    { name: "Flexiones BB para Tríceps", videoId: "https://drive.google.com/open?id=1r3bCDkNdD1se_RtMQ26_0FKRrXEkEZ6q&usp=drive_copy", description: "Flexiones adaptadas para que el esfuerzo recaiga en los tríceps. Bajá profundo y extendé con potencia en cada repetición." },
    { name: "Fondos con Peso", videoId: "https://drive.google.com/open?id=1MyfPewMxuxCD9HfgnydTxVaPOtCJDX_K&usp=drive_copy", description: "En paralelas, con carga adicional, bajá bien profundo y subí fuerte. Ideal para ganar masa y potencia en tríceps." },
    { name: "Fondos en Apoyo", videoId: "https://drive.google.com/open?id=1YiCsUvxQEPrFPAPfePpOFo9aRlUAmxWy&usp=drive_copy", description: "Con las manos en un banco y los pies apoyados, bajá el torso y extendé los brazos. Variante accesible que activa los tríceps de forma directa." },
    { name: "Fondos para Tríceps", videoId: "https://drive.google.com/open?id=1gWFhIsRKvlFbGxjbTPWurvsTZmZQlT0K&usp=drive_copy", description:  "En paralelas, mantené el torso erguido y los codos pegados. El estímulo recae directo en el tríceps con cada extensión." },
    { name: "Fondos Sentado en Máquina", videoId: "https://drive.google.com/open?id=1NnzKZ_K5J4nxJ2qQbZopPvXqfdwCdQOy&usp=drive_copy", description: "La máquina guía el movimiento, dándote seguridad. Bajá hasta estirar bien y subí cerrando con fuerza." },
    { name: "Patadas Tríceps con Mancuerna", videoId: "https://drive.google.com/open?id=1mzHDiEAjmglBPzczXHnh-ySuETM031tC&usp=drive_copy", description: "Con el torso inclinado, extendé el brazo hacia atrás hasta bloquear el codo. Apretá fuerte el tríceps arriba y controlá la bajada." },
    { name: "Press Banca con Agarre Cerrado en Smith", videoId: "https://drive.google.com/open?id=1bozxGYZDRlOInyasSbB5cxP1ISNMrQhO&usp=drive_copy", description: "Con manos al ancho de hombros, bajá la barra controlada y empujá explosivo. El foco está en los tríceps, con la ventaja de la máquina para mayor seguridad." },
    { name: "Press Banca con Agarre Cerrado", videoId: "https://drive.google.com/open?id=1EH6i0xBrb9COfLNrOD63grbmpnCgaXdv&usp=drive_copy", description: "Similar al press clásico, pero con manos juntas. Trabajás pecho y hombros, pero el esfuerzo principal va directo a los tríceps." },
    { name: "Press Francés Acostado 45°", videoId: "https://drive.google.com/open?id=1IHXvDlZKipk6wOJ7cvl0DACI89Vnq56m&usp=drive_copy", description: "En banco inclinado, bajá la barra o mancuernas hacia la frente y extendé los brazos arriba. Movimiento que estira y contrae intensamente el tríceps." },
    { name: "Press Francés con Polea", videoId: "https://drive.google.com/open?id=13UL6YXteMgD8WOdzSvN8W25PFtUapcjs&usp=drive_copy", description: "Con la polea, el tríceps recibe tensión constante. Bajá controlado y extendé hasta arriba sin descanso." },
    { name: "Press Francés de Pie", videoId: "https://drive.google.com/open?id=19nZK1hdMyO7jsCp2A7N-5t4NgdfK91d-&usp=drive_copy", description: "De pie con barra o mancuerna, llevá el peso por detrás de la cabeza y extendé arriba. Exige fuerza y estabilidad del core." },
    { name: "Press Francés Inclinado 45° con Mancuerna", videoId: "https://drive.google.com/open?id=1c6fAuw0oNnc93gfhmkP-90WuVSc3v8Cg&usp=drive_copy", description: "Unilateral, con banco inclinado. Bajá la mancuerna por detrás de la cabeza y extendé hasta arriba, corrigiendo desbalances entre brazos." },
    { name: "Press Francés Sentado con Apoyo 45°", videoId: "https://drive.google.com/open?id=1wabSzp9GnEmqK9ZiUMuoB98lJsxtBvsd&usp=drive_copy", description: "Con respaldo inclinado, mantené firme la postura. Extendé los brazos desde atrás de la cabeza hasta bloquear codos, apretando fuerte el tríceps." },
    { name: "Press Francés Sentado sin Apoyo", videoId: "https://drive.google.com/open?id=1dJs8JEwMewIIJRtiNHSdG9gZmkipIBzO&usp=drive_copy", description: "Mantené firme la postura (control y estabilidad del core). Extendé los brazos desde atrás de la cabeza hasta bloquear codos, apretando fuerte el tríceps." },
    { name: "Press Francés Unilateral con Apoyo", videoId: "https://drive.google.com/open?id=1-wVWtPeE2mSTuXPIAyaLY21sCGkvVb4B&usp=drive_copy", description: "Con mancuerna, trabajá un brazo a la vez. Estirá bien atrás y extendé hasta la contracción máxima para corregir diferencias de fuerza." },
    { name: "Tríceps con Polea Agarre Inverso", videoId: "https://drive.google.com/open?id=1pm42ieycQSk2NXWFpdjHW0W4cnFS-PQ_&usp=drive_copy", description: "Con las palmas hacia arriba, llevá la barra hacia abajo extendiendo codos. Este agarre cambia el estímulo y resalta fibras distintas del tríceps." },
  ],
  antebrazos: [
    { name: "Bíceps con Barra W Agarre Inverso", videoId: "https://drive.google.com/open?id=1LcZIuYHb-yxLzKD7gRNHkgq_XkbLJXcp&usp=drive_copy", description: "Con la barra W en agarre invertido (palmas hacia abajo), subí y bajá controlado. Este trabajo enfatiza el antebrazo y el braquiorradial, más que el bíceps." },
    { name: "Bíceps con Cable con Barra W Agarre Inverso", videoId: "https://drive.google.com/open?id=15OII_FVeOzK_OFR8HrjVUomdS6IUZ-Um&usp=drive_copy", description: "La polea mantiene la tensión continua. Al usar el agarre inverso, la carga recae sobre antebrazos y braquiorradial, fortaleciendo la zona." },
    { name: "Bíceps Martillo Alternado con Mancuernas", videoId: "https://drive.google.com/open?id=11owrSDpmOYiTrJ_hpB6k9Zadxh62cqLY&usp=drive_copy", description: "Aunque también trabaja bíceps, el martillo alternado es excelente para el antebrazo (braquirradial) y la fuerza de agarre. Usá un movimiento controlado y firme." },
    { name: "Bíceps Martillo Cruzado Alternado con Mancuernas", videoId: "https://drive.google.com/open?id=1PEos2GmJtAfpNWxoHHN4hB6j2pcFGCme&usp=drive_copy", description: "La variante cruzada suma estabilidad del core, pero el estímulo sigue siendo fuerte sobre el antebrazo y el braquial anterior." },
    { name: "Bíceps Martillo Predicador con Mancuerna", videoId: "https://drive.google.com/open?id=18DoOY6tn_rU3xB1kvAjP3ZdGw32wfjnY&usp=drive_copy", description: "En banco predicador, el agarre martillo aísla más y carga directo los antebrazos, dándoles mayor tensión en todo el recorrido." },
    { name: "Círculos de Muñeca con Mancuernas", videoId: "https://drive.google.com/open?id=1U6lgFwtu8r4vXP_ndlufPEZ-AH_Vwrok&usp=drive_copy", description: "Movimiento simple y específico: girar muñecas con mancuernas. Fortalece los antebrazos y mejora la movilidad articular." },
    { name: "Curl con Barra para Antebrazos", videoId: "https://drive.google.com/open?id=12N4XSxqhjQhI3KyQMfx8NTu1T-Wnd1cz&usp=drive_copy", description: "Con la barra tomada en pronación, subí solo con la fuerza de los antebrazos. Excelente para ganar fuerza de agarre y densidad muscular." },
    { name: "Curl con Cable para Antebrazos", videoId: "https://drive.google.com/open?id=1sqTPGGvmzRaLO2QfU7TzVy870XK5-yYL&usp=drive_copy", description:"Variante en polea baja que mantiene resistencia constante. Ideal para congestionar los antebrazos sin descanso entre fases." },
    { name: "Rodillo para Antebrazos", videoId: "https://drive.google.com/open?id=1hMKOlJJXKjdwk8ITnB8eHOvwhD9iQ3iP&usp=drive_copy", description: "Enrollá y desenrollá el peso con el rodillo. Es uno de los ejercicios más intensos para desarrollar fuerza y resistencia en antebrazos y agarre." },
  ],
  core: [
    { name: "Abdominales con Ruedas", videoId: "https://drive.google.com/open?id=1EPd1mlDWyk8bGC7fTeYy0ZkMrRobLDAB&usp=drive_copy", description: "Ejercicio avanzado con rueda abdominal. Extendete lo más que puedas adelante para estirar el abdomen y volvé contrayendo fuerte. Trabaja todo el core de forma intensa y funcional." },
    { name: "Crunch con Polea de Pie", videoId: "https://drive.google.com/open?id=18TAJI9c-nHmobfqohEp8btc_bxH1EdoK&usp=drive_copy", description: "De pie, tomá la polea y llevá el torso hacia abajo redondeando la columna. La resistencia variable permite que sientas el abdomen estirarse y luego cerrarse con potencia." },
    { name: "Crunch con Polea", videoId: "https://drive.google.com/open?id=1fBKjvO8dDVh2_aUG9BIhYO4pFSEM4_yD&usp=drive_copy", description: "Clásico en polea baja. El movimiento se centra en redondear la zona abdominal, aprovechando la tensión constante para un estímulo controlado." },
    { name: "Crunch Declinado", videoId: "https://drive.google.com/open?id=1a-UhAhEFjJDREUT-kms82kW_TBAsMbk5&usp=drive_copy", description: "En banco declinado, bajá lento para aprovechar el estiramiento y subí contrayendo. La inclinación aumenta la intensidad y el rango de movimiento." },
    { name: "Crunch en Máquina", videoId: "https://drive.google.com/open?id=1BjpgVl1GORdvQ4kD8phzxHLxfB-Yf-BD&usp=drive_copy", description: "Sentado en máquina específica, concentrá todo en apretar el abdomen mientras el movimiento guiado te permite ajustar la carga y controlar mejor el recorrido." },
    { name: "Elevación de Piernas Inclinado", videoId: "https://drive.google.com/open?id=1pf0AU8B_gW8-sWSNZfo1ElzNx_XmO9LW&usp=drive_copy", description: "En banco inclinado, levantá las piernas desde la cadera. El abdomen inferior se estira y se contrae intensamente en cada repetición." },
    { name: "Elevación de Piernas Acostado", videoId: "https://drive.google.com/open?id=1ykjxBLXWX1mHyaGGOiFPP9JDBKuHdXmP&usp=drive_copy", description: "Acostado, subí y bajá las piernas sin perder el control. Ideal para trabajar el abdomen inferior y reforzar la estabilidad del core." },
    { name: "Elevación de Piernas Vertical (Colgado)", videoId: "https://drive.google.com/open?id=1t65NC9uTEyDqHd4lwFhLmte5Y0xDrhWD&usp=drive_copy", description: "Colgado de barra, llevá las piernas hacia el pecho. El abdomen trabaja de forma brutal mientras también ganás fuerza de agarre." }, 
    { name: "Elevación de Piernas Vertical", videoId: "https://drive.google.com/open?id=1snEads61earyIHMcG2fc5EgrVFXD_wPq&usp=drive_copy", description: "De pie o en soporte vertical, subí las piernas controladas. El esfuerzo va directo al abdomen inferior y desafía la estabilidad del core." },
    { name: "Escaladas", videoId: "https://drive.google.com/open?id=1EsStIT8dqVD2mYlUF0UeU78OuQnQwE3T&usp=drive_copy", description: "En posición de plancha, alterná rodillas al pecho a ritmo dinámico. Combiná cardio con trabajo constante de abdomen." },
    { name: "Flexión Abdominal Lateral Acostado", videoId: "https://drive.google.com/open?id=1nWclK4u5xXEM5uqJOAP5ktS0GDAkhQFe&usp=drive_copy", description: "Acostado de lado, llevá el torso hacia arriba. Trabajo directo sobre los oblicuos, con foco en la contracción lateral." },
    { name: "Flexión Abdominal Lateral con Mancuerna", videoId: "https://drive.google.com/open?id=15SkeoXeyX34VwRPVQXHEwa415lueyI4D&usp=drive_copy", description: "De pie, con mancuerna en una mano, incliná el torso lateralmente. El peso suma intensidad al trabajo de los oblicuos." },
    { name: "Hiperextensión 45° Lumbares", videoId: "https://drive.google.com/open?id=1SHncVq_rZhZkUvp-UOusTVaDS1edWydJ&usp=drive_copy", description: "En banco a 45°, descendé despacio para estirar la zona lumbar y subí contrayendo. Fortalece lumbares, glúteos y mejora la postura." },
    { name: "Oblicuos con Peso", videoId: "https://drive.google.com/open?id=1SkHQ9QQQnqYx3JCU-Z1Lgy5SS3TKZd8-&usp=drive_copy", description:"Con carga extra, girá el torso o incliná lateralmente. Es un estímulo fuerte para los oblicuos y la zona lateral del core." },
    { name: "Plancha Extensa", videoId: "https://drive.google.com/open?id=1Y2_msKNEkwS-sQLPdsmp6wftWsJPzIZ7&usp=drive_copy", description: "Con brazos bien extendidos, mantené la postura rígida. El abdomen debe resistir el estiramiento para mantener la estabilidad." },
    { name: "Plancha Frontal", videoId: "https://drive.google.com/open?id=1gDnvOMTqTkFRmNDMOoSdYOin05tIUS60&usp=drive_copy", description: "Apoyado en antebrazos, sostené el cuerpo recto. El abdomen trabaja de forma isométrica para estabilizar todo el cuerpo." },
    { name: "Plancha Lateral", videoId: "https://drive.google.com/open?id=1Uu0rXn3fxNGTHNRZc3OOKms_ru0qePFX&usp=drive_copy", description: "De costado, sostené la posición firme. El esfuerzo va directo a los oblicuos y la estabilidad lateral." },
    { name: "Superman", videoId: "https://drive.google.com/open?id=1aCBL0xpqdv4UcN8TloNfLgYWmaIvpK-t&usp=drive_copy", description: "Acostado boca abajo, levantá brazos y piernas a la vez. Refuerza lumbares y glúteos, complementando el trabajo del core posterior." },
  ],
  full_body: [
    { name: "Arranque de Potencia con Barra", videoId: "https://drive.google.com/open?id=1iCKpD4SLJTt0KWpdKQUEhmIdAjfLB7Zs&usp=drive_copy", description: "Ejercicio olímpico explosivo. Desde el suelo llevás la barra arriba de manera rápida, usando piernas, core y brazos. Desarrolla potencia total y coordinación." },
    { name: "Arranque de Potencia con Sentadilla con Barra", videoId: "https://drive.google.com/open?id=1ZJ7T1AXZPkoFY331D35burrNskUKw-62&usp=drive_copy", description: "Variante del arranque donde recibís la barra en sentadilla completa. Exige movilidad, fuerza y técnica, trabajando todo el cuerpo en un solo movimiento." },
    { name: "Arranque Dividido con Barra", videoId: "https://drive.google.com/open?id=1ffXS7Js17As1cbeDhgsSKCAq79nxZ_zv&usp=drive_copy", description: "Recibís la barra en posición de zancada, lo que mejora estabilidad unilateral y control. Excelente para fuerza, potencia y equilibrio." },
    { name: "Arranque Muscular con Barra", videoId: "https://drive.google.com/open?id=1Ja1zsEk3wVMcd9V2W-TR10J6cVaZ5Eqg&usp=drive_copy", description: "Se realiza sin flexionar mucho las piernas, tirando con potencia de brazos y espalda. Desarrolla fuerza de tracción y coordinación." },
    { name: "Arranque con Mancuerna + Press de Hombro", videoId: "", description: "Mové la mancuerna desde el suelo en arranque, y al llevarla arriba agregá un press. Combina tracción, fuerza de piernas y trabajo de hombros con estabilidad del core." },
    { name: "Balanceo con Rusa a Dos Manos", videoId: "https://drive.google.com/open?id=1-Nfjap3NVHkZQivb3pi-G4CUnt78pUVK&usp=drive_copy", description: "Clásico swing con kettlebell. Empujá con la cadera, dejá que suba el peso y controlá la bajada. Potencia brutal en glúteos y core." },
    { name: "Balanceo con Rusa a Una Mano", videoId: "https://drive.google.com/open?id=1bC1IfG52yMfbdYdNbEhMjKKXQW2jP_e5&usp=drive_copy", description: "Swing con kettlebell, con una mano. Empujá con la cadera, dejá que suba el peso y controlá la bajada. Aumenta la exigencia del core y mejora la estabilidad unilateral." },
    { name: "Balanceo con Rusas", videoId: "https://drive.google.com/open?id=1PpjubQyTaWYWFt6rW32j7-fb7YLO0pWb&usp=drive_copy", description: "Con dos kettlebells, el esfuerzo se duplica. Requiere fuerza, coordinación y potencia explosiva de cadera." },
    { name: "Bicicleta Elíptica", videoId: "https://drive.google.com/open?id=1UiF6uGIHPNjO1I0PLBK-QR03fx4ISdba&usp=drive_copy", description: "Ejercicio de bajo impacto. Mové brazos y piernas en coordinación para un trabajo suave, completo y seguro para las articulaciones." },
    { name: "Burpees con Mancuernas", videoId: "https://drive.google.com/open?id=16SW7fwFFYBPbRsSGO-oI2_KuhFcAZe28&usp=drive_copy", description: "Burpee tradicional, pero agregando el empuje de mancuernas. Mezcla cardio, fuerza y coordinación en un solo movimiento." },
    { name: "Burpees", videoId: "https://drive.google.com/open?id=1Smwm2nFs6TGkdgcC-m6pp5jBM-rojOJ9&usp=drive_copy", description: "Clásico ejercicio de cuerpo completo: sentadilla, plancha, flexión y salto. Intenso, rápido y efectivo para fuerza y cardio." },
    { name: "Cargadas con Barra", videoId: "https://drive.google.com/open?id=1FYz1WNqWrqYbAVdRku4qipnYaeE7GQMo&usp=drive_copy", description: "Llevá la barra desde el suelo hasta los hombros en un movimiento explosivo. Trabaja desde piernas hasta trapecios y exige potencia total." },
    { name: "Cargadas con Mancuernas con Press de Hombros", videoId: "https://drive.google.com/open?id=1UF730gkwbQaJekMeuihAWIidqf3LlIWm&usp=drive_copy", description: "Combiná la cargada con un press overhead. Ejercicio integral para potencia, fuerza y estabilidad del core." },
    { name: "Máquina de Remo", videoId: "https://drive.google.com/open?id=1pZ8bNH2kJKEbkI-Xs2VqueCBRuf27tx_&usp=drive_copy", description: "CCada remada involucra piernas, espalda, brazos y core. Ejercicio completísimo que combina fuerza y cardio. Sentí cómo tu cuerpo entero trabaja en cada tirón." },
    { name: "Power Jerk con Barra", videoId: "https://drive.google.com/file/d/1VMKULMWUsUTrsnOvVC0En9biBtZjzDp4/view?usp=drivesdk", description: "Desde los hombros, impulsá con piernas y empujá la barra por encima de la cabeza. Potencia explosiva que conecta tren inferior y superior." },
    { name: "Power Jerk Dividido con Barra", videoId: "https://drive.google.com/file/d/1K7_DN9OOZZ20BUqYjh8eb444GROVaKm3/view?usp=drivesdk", description: "Desde los hombros, impulsá con piernas y empujá la barra por encima de la cabeza. Recibís en posición de zancada. Requiere coordinación, fuerza y estabilidad unilateral avanzada." },
  ],
  cardio: [
    { name: "Bicicleta Elíptica", videoId: "https://drive.google.com/open?id=1v384vGz5bUtEjJL3Cjmvaxei0JHXaUeh&usp=drive_copy", description: "Movimiento coordinado de brazos y piernas sin impacto. Ideal para quemar calorías cuidando tus articulaciones. Sentí el trabajo constante en todo el cuerpo, manteniendo un ritmo fluido." },
    { name: "Bicicleta", videoId: "https://drive.google.com/open?id=1Kt84PlJ3RP_Vxv6gTDZ3ZIqC6XId8ofW&usp=drive_copy", description: "Un clásico del cardio. Pedaleá a tu ritmo para fortalecer piernas y mejorar la resistencia. Podés usarla tanto para sesiones suaves como para entrenamientos intensos." },
    { name: "Correr en Cinta Inclinada", videoId: "https://drive.google.com/open?id=1yO-gTzvDWy9qrLyWSbrvShINuSD7KnLX&usp=drive_copy", description: "Subí la inclinación y sentí cómo aumenta el esfuerzo en cuádriceps y glúteos. Quema más calorías y simula una subida real, llevando tu cardio a otro nivel." },
    { name: "Correr en Cinta", videoId: "https://drive.google.com/open?id=1tw6nu2sEALVVS_y6HvmOIClL-9jmn0cJ&usp=drive_copy", description: "Carrera controlada. Mantené un ritmo constante para resistencia (LISS), o jugá con intervalos para mayor quema calórica (HIIT). El impacto es menor que en la calle." }, 
    { name: "Elíptica", videoId: "https://drive.google.com/open?id=1t3bkF6YvhVIB1b6Wmqk6jbId0zbIwb6p&usp=drive_copy", description: "Trabajo de tren superior e inferior al mismo tiempo, con movimiento suave y guiado. Perfecta para sesiones largas de cardio sin desgaste en las rodillas." },
    { name: "Máquina de Remo", videoId: "https://drive.google.com/open?id=1edAYCn_wOoSRw2mXmVFi2qlH6fnNLP0N&usp=drive_copy", description: "Cada remada involucra piernas, espalda, brazos y core. Ejercicio completísimo que combina fuerza y cardio. Sentí cómo tu cuerpo entero trabaja en cada tirón." },
  ],
  pliometria: [
    { name: "Estocadas con Salto Unilateral", videoId: "https://drive.google.com/open?id=1578rRd06Zku5SgvbMOWjzWXD4tM5RT95&usp=drive_copy", description: "Apoyá una pierna firme y saltá explosivo con la otra. Trabajás fuerza y potencia de manera unilateral, mejorando equilibrio y coordinación. Sentí el esfuerzo directo en cuádriceps y glúteos." },
    { name: "Estocadas con Salto", videoId: "https://drive.google.com/open?id=1ynfe8GWo_6bZrY01YUzssBuxxGuszzCK&usp=drive_copy", description: "Alterná las piernas en cada salto. Es un ejercicio dinámico que desarrolla potencia en piernas y estabilidad en la cadera. Cuanto más profundo bajes, mayor el estiramiento y la activación." },
    { name: "Flexiones BB con Toque de Hombro", videoId: "https://drive.google.com/open?id=1uu4FyMDlLJtVJQ03wL241Mzjk9x9Vc8o&usp=drive_copy", description: "Hacés una flexión y, al subir, tocás un hombro con la mano contraria. El movimiento suma coordinación y trabajo de core mientras exigís pecho, tríceps y hombros." },
    { name: "Salto al Cajón de Lado", videoId: "https://drive.google.com/open?id=1JW7AGfa21stuBzDDPyPyoj6GNq3m7nzc&usp=drive_copy", description: "Saltá lateralmente al cajón y bajá con control. Este ejercicio potencia la agilidad, fortalece los estabilizadores de rodilla y tobillo y mejora la potencia lateral." },
    { name: "Salto en Escalera", videoId: "https://drive.google.com/open?id=1myNcsP8nmeFsgkEM2F1ulE2hraOXyA73&usp=drive_copy", description: "Usá las escaleras para realizar saltos rápidos y coordinados. Mejorás velocidad de pies, coordinación y capacidad de reacción." },
    { name: "Salto Encogido", videoId: "https://drive.google.com/open?id=1iYubPgaeiiA_2CDFPT7RNlW5dFrI5K8V&usp=drive_copy", description: "Saltá lo más alto posible llevando rodillas al pecho. Explosivo para piernas y exigente para el core. Sentí la contracción al subir y controlá la caída suave." },
    { name: "Sentadilla con Doble Salto", videoId: "https://drive.google.com/open?id=1ANVGR0z6UsINtgGW-W1WiI_7p0dIF0p0&usp=drive_copy", description: "Bajá en sentadilla y hacé dos saltos seguidos antes de volver a caer. Desafía tu potencia y resistencia explosiva, manteniendo el control en cada repetición." },
    { name: "Sentadilla con Salto con Mancuernas", videoId: "https://drive.google.com/open?id=1mxAVKle478RKiaFCFCbAWZNNP6sb4Qcp&usp=drive_copy", description: "Agarrá mancuernas, bajá en sentadilla y explotá en el salto. Sumás resistencia extra al trabajo de cuádriceps y glúteos, llevando la intensidad al máximo." },
  ],
  weight_lifting: [
    { name: "Power Jerk con Barra", videoId: "https://drive.google.com/file/d/1VMKULMWUsUTrsnOvVC0En9biBtZjzDp4/view?usp=drivesdk", description: "Desde los hombros, impulsá con piernas y empujá la barra por encima de la cabeza. Potencia explosiva que conecta tren inferior y superior." },
    { name: "Power Jerk Dividido con Barra", videoId: "https://drive.google.com/file/d/1K7_DN9OOZZ20BUqYjh8eb444GROVaKm3/view?usp=drivesdk", description: "Desde los hombros, impulsá con piernas y empujá la barra por encima de la cabeza. Recibís en posición de zancada. Requiere coordinación, fuerza y estabilidad unilateral avanzada." },
    { name: "Cargadas con Barra", videoId: "https://drive.google.com/open?id=1FYz1WNqWrqYbAVdRku4qipnYaeE7GQMo&usp=drive_copy", description: "Llevá la barra desde el suelo hasta los hombros en un movimiento explosivo. Trabaja desde piernas hasta trapecios y exige potencia total." },
    { name: "Cargadas con Mancuernas con Press de Hombros", videoId: "https://drive.google.com/open?id=1UF730gkwbQaJekMeuihAWIidqf3LlIWm&usp=drive_copy", description: "Combiná la cargada con un press overhead. Ejercicio integral para potencia, fuerza y estabilidad del core." },
    { name: "Balanceo con Rusa a Dos Manos", videoId: "https://drive.google.com/open?id=1-Nfjap3NVHkZQivb3pi-G4CUnt78pUVK&usp=drive_copy", description: "Clásico swing con kettlebell. Empujá con la cadera, dejá que suba el peso y controlá la bajada. Potencia brutal en glúteos y core." },
    { name: "Balanceo con Rusa a Una Mano", videoId: "https://drive.google.com/open?id=1bC1IfG52yMfbdYdNbEhMjKKXQW2jP_e5&usp=drive_copy", description: "Swing con kettlebell, con una mano. Empujá con la cadera, dejá que suba el peso y controlá la bajada. Aumenta la exigencia del core y mejora la estabilidad unilateral." },
    { name: "Balanceo con Rusas", videoId: "https://drive.google.com/open?id=1PpjubQyTaWYWFt6rW32j7-fb7YLO0pWb&usp=drive_copy", description: "Con dos kettlebells, el esfuerzo se duplica. Requiere fuerza, coordinación y potencia explosiva de cadera." },
    { name: "Arranque Muscular con Barra", videoId: "https://drive.google.com/open?id=1Ja1zsEk3wVMcd9V2W-TR10J6cVaZ5Eqg&usp=drive_copy", description: "Se realiza sin flexionar mucho las piernas, tirando con potencia de brazos y espalda. Desarrolla fuerza de tracción y coordinación." },
    { name: "Arranque Dividido con Barra", videoId: "https://drive.google.com/open?id=1ffXS7Js17As1cbeDhgsSKCAq79nxZ_zv&usp=drive_copy", description: "Recibís la barra en posición de zancada, lo que mejora estabilidad unilateral y control. Excelente para fuerza, potencia y equilibrio." },
    { name: "Arranque de Potencia con Sentadilla con Barra", videoId: "https://drive.google.com/open?id=1ZJ7T1AXZPkoFY331D35burrNskUKw-62&usp=drive_copy", description: "Variante del arranque donde recibís la barra en sentadilla completa. Exige movilidad, fuerza y técnica, trabajando todo el cuerpo en un solo movimiento." },
    { name: "Arranque de Potencia con Barra", videoId: "https://drive.google.com/open?id=1iCKpD4SLJTt0KWpdKQUEhmIdAjfLB7Zs&usp=drive_copy", description: "Ejercicio olímpico explosivo. Desde el suelo llevás la barra arriba de manera rápida, usando piernas, core y brazos. Desarrolla potencia total y coordinación." },
  ],
  acondicionamiento: [
    { name: "Patadas Atrás", videoId: "https://drive.google.com/open?id=1N5USpUu0xuH1k9XnSZY7NWQ3kXBPAo_I&usp=drive_copy", description: "Ejercicio de acondicionamiento que trabaja glúteos y isquiotibiales de forma dinámica. Mejora la coordinación y activa la cadena posterior." },
    { name: "Skipping Rodillas Arriba", videoId: "https://drive.google.com/open?id=1YP2tRw0VbRR3CWOMmeDGoGXNkAouoQyo&usp=drive_copy", description: "Ejercicio cardiovascular de alta intensidad que mejora la coordinación, eleva la frecuencia cardíaca y fortalece el core." },
    { name: "Sentadillas más Estocadas con Peso (Bolsa)", videoId: "", description: "Combinación de sentadillas y estocadas usando una bolsa como peso. Ejercicio funcional que desarrolla fuerza y resistencia en piernas." },
    { name: "Burpees con Flexiones de Brazos", videoId: "", description: "Burpees completos incluyendo flexión de brazos y marcando bien la sentadilla. Ejercicio de cuerpo completo de alta intensidad." },
    { name: "Bíceps más Press Arnold con Mancuernas", videoId: "", description: "Combinación de curl de bíceps seguido de press Arnold. Trabaja bíceps y hombros de forma continua y eficiente." },
    { name: "Rotaciones de Cadera", videoId: "", description: "Ejercicio de movilidad que mejora la flexibilidad de cadera y prepara las articulaciones para el entrenamiento." },
    { name: "Rotaciones de Brazos", videoId: "", description: "Movimiento de calentamiento que prepara los hombros y mejora la movilidad articular del tren superior." },
    { name: "Círculos de Brazos Hacia Adelante", videoId: "", description: "Movimiento de calentamiento que prepara los hombros, mejora la movilidad articular y la circulación en el tren superior." },
    { name: "Círculos de Brazos Hacia Atrás", videoId: "", description: "Movimiento de calentamiento que prepara los hombros, mejora la movilidad articular y la circulación en el tren superior." },
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
          ],
        },
    },






    
  },
},
  "3 MUSCULACIÓN + 1 HIIT + (1 LISS)": {
    routines: {
      "camilafrancoblonda": {
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
          ],
        },
    },






    
  },
},
  "3 MUSCULACIÓN + 2 HIIT": { routines: {} },



  "3 MUSCULACIÓN + 2 HIIT + (1 LISS)": { routines: {} },



  "4 MUSCULACIÓN (1 FB HIIT) + (1 LISS)":  {
  routines: {
    "sofiaustarroz": {
      name: "Sofía",
      plan: {  
        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
      },
    },






    
  },
},
  "4 MUSCULACIÓN + 1 HIIT + (1 LISS)": {
  routines: {
    "franciscoustarroz": {
      name: "Francisco",
      plan: {  
        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12",
            "Press inclinado con mancuernas 4 x 10-10-10-10",
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
           ],
          },
      },
    },




"facundoustarroz": {
      name: "Facundo",
      plan: {  
        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
      },
    },




  },
},
  "4 MUSCULACIÓN + 2 HIIT": {
  routines: {
    "NOMBRE DE USUARIO": {
      name: "NOMBRE EJ Jaun",
      plan: {  
        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
      },
    },







  },
},
  "5 MUSCULACIÓN + 1 HIIT + (1 LISS)": {
  routines: {
    "NOMBRE DE USUARIO": {
      name: "NOMBRE EJ Francisco",
      plan: {  

        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 5 - Brazos y Hombros":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
      },
    },






    
  },
},
  "5 MUSCULACIÓN + (1 LISS)": {
  routines: {
    "NOMBRE DE USUARIO": {
      name: "NOMBRE EJ Federico",
      plan: {  

        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 5 - Brazos y Hombros":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
      },
    },






    
  },
},
  "5 MUSCULACIÓN + 2 HIIT": {
  routines: {
    "NOMBRE DE USUARIO": {
      name: "NOMBRE EJ Ricardo",
      plan: {  

        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 5 - Brazos y Hombros":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
      },
    },






    
  },
},
  "5 MUSCULACIÓN + 3 HIIT": {
  routines: {
    "NOMBRE DE USUARIO": {
      name: "NOMBRE EJ Santiago",
      plan: {  

        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 5 - Brazos y Hombros":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
      },
    },






    
  },
},
  "6 MUSCULACIÓN + 2 HIIT + (1 LISS)": {
  routines: {
    "NOMBRE DE USUARIO": {
      name: "NOMBRE EJ Damian",
      plan: {  

        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 5 - Brazos y Hombros":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 6 - Pecho y Biceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
      },
    },






    
  },
},
  "6 MUSCULACIÓN + 2 HIIT": {
  routines: {
    "NOMBRE DE USUARIO": {
      name: "NOMBRE EJ Isaac",
      plan: {  

        "Día 1 - Pecho y Tríceps": {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 2 - Espalda y Bíceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 3 - Piernas":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 4 - Hombros y Core":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 5 - Brazos y Hombros":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },

        "Día 6 - Pecho y Biceps":  {
          "Acondicionamiento & Calentamiento": [
            "Rotaciones de hombros 2 x 15-15",
            "Skipping 3 x 30seg rest=1min"
            ],
          "Entrenamiento de Fuerza": [
            "Press de banca 4 x 12-10-8-8 rest=2min",
          {
            superset: [
            "Press inclinado con mancuernas 4 x 10-10-10-10",
            "Fondos para tríceps 3 x 12-12-12"
          ],
            restAfter: "2min"
          },
            "Aperturas en banca 3 x 12-12-12 rest=60s"
            ],
          "Entrenamiento HIIT": [
            "Burpees 3 x 45 seg",
            "Sentadillas con salto 3 x 45 seg"
            ],
          },
      },
    },






    
  },
},
};

/* (Eliminado bloque de overrides por rutina para volver al comportamiento anterior) */

/* ===========================
   MAPEO USUARIOS → RUTINAS
=========================== */
const userRoutineMapping = {
  agustina: { folder: "2 MUSCULACIÓN + (2 LISS)", routine: "agustina" },
  camilafrancoblonda:   { folder: "3 MUSCULACIÓN + 1 HIIT + (1 LISS)", routine: "camilafrancoblonda" },
  sofiaustarroz:    { folder: "4 MUSCULACIÓN (1 FB HIIT) + (1 LISS)", routine: "sofiaustarroz" },
  franciscoustarroz: { folder: "4 MUSCULACIÓN + 1 HIIT + (1 LISS)", routine: "franciscoustarroz" },
  facundoustarroz: { folder: "4 MUSCULACIÓN + 1 HIIT + (1 LISS)", routine: "facundoustarroz" },
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
  'tundra-vesuvio-balalaika-siberia-yogurt-vesuvio-octavo-zarina-octavo-batata': 'camilafrancoblonda',
  'espresso-urali-tiramisu-siberia-vesuvio-octavo-zarina-octavo-batata': 'sofiaustarroz',
  'tiramisu-limoncello-vesuvio-russia-tundra-siberia-espresso-tundra-urali-octavo-zarina-octavo-batata': 'franciscoustarroz',
  'tiramisu-vesuvio-tundra-quarzo-russia-gondola-urali-octavo-zarina-octavo-batata': 'facundoustarroz',
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
            ${(() => {
  const count = countExercisesDisplay(exercises);
  return `<p class="text-blue-600 text-sm">${count} ejercicio${count !== 1 ? 's' : ''}</p>`;
})()}
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

  const body = renderDayBody(day, exercises);

  const html = `
    <div class="flex justify-between items-center mb-4">
      <button onclick="showSpecificRoutine('${folderName}', '${routineKey}')" class="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">← Volver a días</button>
      <div class="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg px-4 py-2 ml-4 text-blue-700 text-sm font-semibold">
        Tip: toca el nombre del ejercicio para ver el video.
      </div>
    </div>
    ${body}
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
            ${(() => {
  const count = countExercisesDisplay(exercises);
  return `<p class="text-blue-600 text-sm">${count} ejercicio${count !== 1 ? 's' : ''}</p>`;
})()}
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

  const body = renderDayBody(day, exercises);

  const html = `
    <div class="flex justify-between items-center mb-4">
      <button onclick="showUserSpecificTraining('${userKey}')" class="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">← Volver a días</button>
      <div class="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg px-4 py-2 ml-4 text-blue-700 text-sm font-semibold">
        Tip: toca el nombre del ejercicio para ver el video.
      </div>
    </div>
    ${body}
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

// === Detectar si el día viene seccionado ===
function isSectionedDay(exercises) {
  return exercises && typeof exercises === 'object' && !Array.isArray(exercises);
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

function countExercisesDisplay(exercises) {
  const countArray = (arr) => arr.reduce((acc, ex) => {
    if (ex && typeof ex === 'object' && Array.isArray(ex.superset)) {
      return acc + ex.superset.length; // cada ejercicio dentro de la biserie cuenta
    }
    return acc + 1;
  }, 0);

  if (Array.isArray(exercises)) {
    return countArray(exercises);
  }
  if (exercises && typeof exercises === 'object') {
    // sumar todas las secciones
    return Object.values(exercises).reduce((acc, arr) => acc + countArray(arr || []), 0);
  }
  return 0;
}

// --- Helpers de descanso y parseo (no rompen lo existente) ---
function extractRestFromTail(tail) {
  // soporta seg y min, incluyendo rangos: "2-3min", "2 a 3 min"
  const t = (tail || '').toString();
  const m = t.match(
    /(?:\||;|\(|\s)(?:descanso|rest)\s*[:=]?\s*([0-9]+(?:\s*(?:-|a)\s*[0-9]+)?\s*(?:s|seg|min))/i
  );
  if (!m) return '';

  let clean = m[1].replace(/\s+/g, ''); // quita espacios: "2a3min" o "90s"

  // Normalizamos "a" → "-"
  clean = clean.replace(/a/gi, '-');

  return `Descanso ${clean}`;
}

function stripRestFromTail(tail) {
  return (tail || '')
    .toString()
    .replace(
      /(?:\||;|\(|\s)(?:descanso|rest)\s*[:=]?\s*[0-9]+(?:\s*(?:-|a)\s*[0-9]+)?\s*(?:s|seg|min)\)?/ig,
      ''
    )
    .trim();
}

// Devuelve { namePart, detailsPart, rest }
function splitExerciseLineWithRest(line) {
  const { namePart, detailsPart } = splitExerciseLine(line);
  const rest = extractRestFromTail(detailsPart);
  const cleanDetails = stripRestFromTail(detailsPart);
  return { namePart, detailsPart: cleanDetails, rest };
}


function generateRoutineItemHTML(exLine, daySlug, index) {
  // Soporte para objetos internos (biserie)
  const toParts = (line) => {
    if (typeof line === 'object' && line && line.__singleObj) {
      return line.__singleObj;
    }
    return splitExerciseLineWithRest(line);
  };

  const { namePart, detailsPart, rest } = toParts(exLine);
  const match = findExerciseByNameFragment(namePart);
  const safeName = escapeForAttr(namePart);
  const inlineDetails = formatDetailsInline(detailsPart);
  const desc = (match && match.description) ? match.description : 'Sin descripción disponible.';
  const descId = `desc-${daySlug}-${index}`;

  return `
    <li class="text-gray-700">
      <!-- TARJETA AZUL -->
      <div class="w-full bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-3 hover:from-blue-100 hover:to-blue-200 transition-colors">
        <button class="w-full text-left flex items-center justify-between" onclick="onRoutineExerciseClick('${safeName}')">
          <div class="font-semibold text-blue-900">
            ${namePart}${inlineDetails ? ` <span class='font-normal text-blue-800'>${inlineDetails}</span>` : ''}
          </div>
          ${rest ? `<span class="badge-rest">${rest}</span>` : ''}
        </button>
      </div>

<!-- CONTENEDOR BLANCO: 3 puntitos + descripción colapsable -->
<div class="desc-card mt-2" onclick="toggleDescription(event, '${descId}')">
  <button
    type="button"
    class="dots-btn"
    aria-controls="${descId}"
    aria-expanded="false"
    data-target="${descId}"
  >
    <span class="dot" aria-hidden="true"></span>
    <span class="dot" aria-hidden="true"></span>
    <span class="dot" aria-hidden="true"></span>
  </button>

  <!-- Panel (colapsable) -->
  <div id="${descId}" class="desc-panel mt-2">
    <div class="text-gray-700 text-xs leading-relaxed">
      ${desc}
    </div>
  </div>
</div>
    </li>
  `;
}

function toggleDescription(evt, id) {
  if (evt) evt.stopPropagation();
  const panel = document.getElementById(id);
  if (!panel) return;

  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);

  const btn = document.querySelector(`[data-target='${id}']`);
  if (btn) {
    btn.setAttribute('aria-expanded', String(!isOpen));
    // ⚡ el botón siempre visible, para que los puntos cambien de color
    btn.style.display = "inline-flex";
  }
}

function onDescCardClick(evt, id) {
  // si el panel está abierto, cerramos y mostramos el botón de 3 puntitos
  const panel = document.getElementById(id);
  if (!panel) return;

  const isOpen = panel.classList.contains('open');
  if (isOpen) {
    panel.classList.remove('open');
    const btn = document.querySelector(`[data-target='${id}']`);
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.style.display = 'inline-flex'; // vuelve a aparecer el botón
    }
  }
}

// group = { superset: [string, string, ...], restAfter: "120s" }
function generateSupersetItemHTML(group, daySlug, index) {
  const lines = Array.isArray(group.superset) ? group.superset : [];
  const items = lines.map((line) => {
    const { namePart, detailsPart, rest } = splitExerciseLineWithRest(line);
    return { __singleObj: { namePart, detailsPart, rest } };
  });

  // Etiqueta dinámica según cantidad
  const n = lines.length;
  const label =
    n === 2 ? 'Biserie' :
    n === 3 ? 'Triserie' :
    n > 3  ? 'Multiserie' :
             'Serie compuesta';

  const inner = items
    .map((obj, idx) => generateRoutineItemHTML(obj, daySlug, index + '-' + idx))
    .join('');

  // Normaliza descanso post-grupo
  let restText = '';
  if (group.restAfter) {
    let clean = group.restAfter.toString().trim();
    if (!/^descanso/i.test(clean)) clean = `Descanso ${clean}`;
    restText = `<div class="mt-3 flex justify-end"><span class="badge-rest">${clean}</span></div>`;
  }

  return `
    <li class="text-gray-700">
      <div class="superset-card">
        <div class="flex items-center justify-between mb-2">
          <div class="font-semibold text-purple-800">${label}</div>
          <div class="text-xs text-purple-700">Sin descanso entre ejercicios</div>
        </div>
        <ul class="space-y-3">
          ${inner}
        </ul>
        ${restText}
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

function renderSectionInline(sectionTitle, items, day) {
  if (!Array.isArray(items) || items.length === 0) return '';

  const daySlug = slugifyForId(`${day}-${sectionTitle}`);

  // Selección de color por título
  let colorClass = 'green';
  if (/fuerza/i.test(sectionTitle)) colorClass = 'red';
  if (/hiit/i.test(sectionTitle)) colorClass = 'yellow';

  return `
    <div class="section-group ${colorClass}">
      <div class="section-header ${colorClass}">
        <h5>${sectionTitle}</h5>
      </div>
      <ul class="space-y-3">
        ${items.map((ex, i) =>
          (typeof ex === 'object' && ex && ex.superset)
            ? generateSupersetItemHTML(ex, daySlug, i)
            : generateRoutineItemHTML(ex, daySlug, i)
        ).join('')}
      </ul>
    </div>
  `;
}


function isSectionedDay(exercises) {
  return exercises && typeof exercises === 'object' && !Array.isArray(exercises);
}

function renderDayBody(day, exercises) {
  // Caso clásico: array plano (como tenías)
  if (Array.isArray(exercises)) {
    const daySlug = slugifyForId(day);
    return `
      <div class="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <h4 class="text-xl font-bold text-gray-800 mb-4">${day}</h4>
        <ul class="space-y-3">
          ${exercises.map((ex, i) =>
            (typeof ex === 'object' && ex && ex.superset)
              ? generateSupersetItemHTML(ex, daySlug, i)
              : generateRoutineItemHTML(ex, daySlug, i)
          ).join('')}
        </ul>
      </div>
    `;
  }

  // Nuevo: día con secciones (todo dentro del MISMO container blanco)
  if (isSectionedDay(exercises)) {
    const ORDER = [
      "Acondicionamiento & Calentamiento",
      "Entrenamiento de Fuerza",
      "Entrenamiento HIIT",
    ];
    const entries = Object.entries(exercises);
    const ordered = [
      ...ORDER.filter(t => exercises.hasOwnProperty(t)).map(t => [t, exercises[t]]),
      ...entries.filter(([t]) => !ORDER.includes(t)),
    ];

    // armamos un solo container
    let inner = `<h4 class="text-xl font-bold text-gray-800 mb-2">${day}</h4>`;
    for (const [sectionTitle, items] of ordered) {
      inner += renderSectionInline(sectionTitle, items, day);
    }

    return `
      <div class="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        ${inner}
      </div>
    `;
  }

  // Fallback
  return `
    <div class="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <h4 class="text-xl font-bold text-gray-800">${day}</h4>
      <p class="text-gray-600">Sin ejercicios.</p>
    </div>
  `;
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

