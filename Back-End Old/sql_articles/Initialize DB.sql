use Laboratoire
go

-- Table des Produits (pour les antennes)
CREATE TABLE Antennes (
  ProduitID INT PRIMARY KEY IDENTITY(1, 1),
  NomProduit NVARCHAR(MAX),
  Image NVARCHAR(255),
  DescriptionProduit NVARCHAR(MAX),
  TypeAntenne NVARCHAR(50),
  Frequence NVARCHAR(300),
  CompatibleDrones NVARCHAR(100), 
  Poids DECIMAL(6, 2), 
  Profondeur DECIMAL(6, 2), 
  EquipementRaccords NVARCHAR(100),
  Stock INT
    -- Prix DECIMAL(10, 2),
);


-- NUMERIQUE : Antenne omnidirectionnelle Foxeer LHCP 5.8 GHz
INSERT INTO Antennes (NomProduit, Image, Frequence, DescriptionProduit, TypeAntenne, CompatibleDrones, Poids, Profondeur, EquipementRaccords, Stock)
VALUES (
  'Antenne omnidirectionnelle Foxeer LHCP 5.8 GHz', 
  'image_drone.jpg', 
  'Fréquence : 5.8 GHz', 
  'L''Antenne Foxeer LHCP 5.8 GHz assure une réception vidéo stable, idéale pour drones FPV.',
  'Omnidirectionnelle pour numérique',   
  'Compatible avec drones Foxeer, DJI, etc.' ,
  6.8 , 
  10.5, 
  'Connecteur SMA',
  50
);

-- Antenne TBS Triumph PRO - RHCP (SMA)
INSERT INTO Antennes (NomProduit, Image, Frequence, DescriptionProduit, TypeAntenne, CompatibleDrones, Poids, Profondeur, EquipementRaccords, Stock)
VALUES (
  'Antenne TBS Triumph PRO - RHCP (SMA)', 
  'image_antenne_tbs.jpg', 
  'Fréquence : 5.8 GHz', 
  'L''antenne TBS Triumph PRO - RHCP (SMA) est une omnidirectionnelle 5.8 GHz de qualité supérieure, offrant une réception vidéo stable pour le FPV. Conçue pour une compatibilité étendue, elle garantit des performances fiables.',
  'Omnidirectionnelle pour numérique',   
  'Compatible avec drones TBS, DJI, etc.' ,
  6.8 , 
  10.5 ,
  'Connecteur SMA',
  500
);

-- Antenne VAS 5,8GHz Ion Pro FPV Antenne longue avec adaptateur SMA RHCP
INSERT INTO Antennes (NomProduit, Image, Frequence, DescriptionProduit, TypeAntenne, CompatibleDrones, EquipementRaccords, Stock)
VALUES (
  'Antenne VAS 5,8GHz Ion Pro FPV Antenne longue avec adaptateur SMA RHCP', 
  'image_antenne_vas.jpg', 
  'Fréquence : 5.8 GHz', 
  'L''Antenne VAS 5,8GHz Ion Pro FPV est une antenne longue avec adaptateur SMA RHCP, idéale pour une réception vidéo FPV de qualité supérieure. Conçue pour une performance optimale et une compatibilité étendue avec différents drones.',
  'Omnidirectionnelle pour numérique',   
  'Compatible avec une variété de drones FPV' ,
  'Adaptateur SMA RHCP',
  30
);

-- ANALOGIQUE : Antenne Foxeer ECHO Patch 8 dBi 5.8 GHz LHCP
INSERT INTO Antennes (NomProduit, Image, Frequence, DescriptionProduit, TypeAntenne, CompatibleDrones, EquipementRaccords, Poids, Profondeur, Stock)
VALUES (
  'Antenne Foxeer ECHO Patch 8 dBi 5.8 GHz LHCP', 
  'image_antenne_foxeer_echo_patch.jpg', 
  'Fréquence : 5.8 GHz', 
  'L''Antenne Foxeer ECHO Patch 8 dBi 5.8 GHz LHCP est une antenne directionnelle LHCP de haute qualité conçue pour offrir une réception vidéo FPV fiable et une portée étendue. Elle est idéale pour les courses de drones et les vols exigeants.',
  'Patch (Directionnelle)',
  'Compatible avec une variété de drones FPV',
  'Connecteur LHCP',
  8,
  40,
  400
);

-- Antenne eachine k-loverleaves 5.8g 5dbi 6 leaf clover antenna rhcp sma/rp-sma 
INSERT INTO Antennes (NomProduit, Image, Frequence, DescriptionProduit, TypeAntenne, CompatibleDrones, EquipementRaccords, Poids, Profondeur, Stock)
VALUES (
  'Antenne Eachine K-Loverleaves 5.8 GHz 5 dBi 6 Leaf Clover Antenna RHCP', 
  'eachine.png', 
  'Fréquence : 5.8 GHz', 
  'L''Antenne Eachine K-Loverleaves 5.8 GHz 5 dBi 6 Leaf Clover Antenna RHCP est une antenne omnidirectionnelle RHCP de haute qualité conçue pour offrir une réception vidéo stable pour les drones FPV analogiques. Elle est idéale pour une variété de drones analogiques et est compatible avec les connecteurs SMA et RP-SMA.',
  'Omnidirectionnelle pour analogique',   
  'Compatible avec une variété de drones FPV analogiques',
  'Connecteur SMA/RP-SMA',
  5.0, 
  60.0, 
  100
);

-- Antenne Lumenier AXII 2 
INSERT INTO Antennes (NomProduit, Image, Frequence, DescriptionProduit, TypeAntenne, CompatibleDrones, EquipementRaccords, Poids, Profondeur, Stock)
VALUES (
  'Antenne Lumenier AXII 2 5.8 GHz', 
  'image_lumenier_axii2.jpg', 
  'Fréquence : 5.8 GHz', 
  'L''Antenne Lumenier AXII 2 est une antenne omnidirectionnelle de haute qualité conçue pour offrir une réception vidéo stable pour les drones FPV analogiques en 5.8 GHz. Elle est réputée pour sa durabilité et sa performance. Compatible avec les connecteurs SMA et RP-SMA.',
  'Omnidirectionnelle pour analogique',   
  'Compatible avec une variété de drones FPV analogiques',
  'Connecteur SMA/RP-SMA',
  6.5, 
  70.0, 
  20
);


-- -- -- Création de la table Batterie
CREATE TABLE Batterie (
    id INT PRIMARY KEY,
    NomProduit NVARCHAR(MAX),
    Image NVARCHAR(255),
    DescriptionProduit NVARCHAR(MAX),
    TypeBatterie NVARCHAR(50),
    tension DECIMAL(4, 2),
    capacite INT,
    taux_de_decharge_maximal INT,
    connecteur VARCHAR(50)
    Stock INT
);




-- -- -- Création de la table Antennes
-- CREATE TABLE Antennes (
--   ID INT PRIMARY KEY IDENTITY(1, 1),
--   Nom NVARCHAR(50),
--   Image NVARCHAR(255),
--   BreveDescription NVARCHAR(30),
--   -- Prix DECIMAL(10, 2) CHECK (Prix >= 0),
--   Specification NVARCHAR(300),
--   CompatibleDrones NVARCHAR(100), 
--   Poids DECIMAL(6, 2),  
--   Profondeur DECIMAL(6, 2), 
--   -- CouleurFabricant NVARCHAR(50), 
--   EquipementRaccords NVARCHAR(100)  
-- );
-- -- -- Insertion des données
-- INSERT INTO Antennes (Nom, Image, BreveDescription, Specification, CompatibleDrones, Poids, Profondeur, EquipementRaccords)
-- VALUES (
--   'Antenne omnidirectionnelle Foxeer LHCP 5.8 GHz',
--   'foxeer-antenna.jpg',
--   'Omnidirectionnelle LHCP 5.8 GHz',
--   -- 24.99,
--   'Fréquence : 5.8 GHz, Polarisation : LHCP, Type d''antenne : Omnidirectionnelle',
--   'Compatible avec drones Foxeer, DJI, etc.',
--   10.5,  -- Poids en grammes
--   6.8,   -- Profondeur en centimètres
--   -- 'Noire',  -- Couleur selon le fabricant (couleurFrabricant)
--   'Connecteur SMA'  -- Équipement (raccords)
-- );
-- TODO FAIRE UNE TABLE POUR LES AVIS ET COMMENTAIRES E UNE POUR LES COULEURS 


-- Table pour les commentaires
CREATE TABLE Commentaires (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Prénom NVARCHAR(50),
    Nom NVARCHAR(50),
    Note INT CHECK (Note >= 1 AND Note <= 5),
    Email NVARCHAR(50) UNIQUE, -- Contrainte d'unicité sur l'e-mail
    Message NVARCHAR(500) CHECK (LEN(Message) >= 10)
);

-- Insertion des données pour les commentaires

INSERT INTO Commentaires (Prénom, Nom, Note, Email, Message)
VALUES
    ('Lucas', 'Dupont', 4, 'lucas.dupont@email.net', 'J''ai acheté l''Antenne Foxeer ECHO Patch 8 dBi pour améliorer la réception de mon drone, et les résultats sont incroyables ! La qualité de la vidéo est nettement meilleure, et la portée de ma télécommande s''est considérablement améliorée. C''est un must pour tous les pilotes de FPV.'),
    ('Alex', 'Johnson', 5, 'alex.johnson@outlook.com', 'Le service de haute qualité m''a impressionné. L''agent de support a été essentiel pour me diriger vers le récepteur parfaitement adapté à mon drone. Grâce à leur expertise, j''ai fait un choix confiant. Je sais que je peux compter sur ce site pour mes futurs achats.'),
    ('Sophie', 'Martin', 5, 'sophie.martin@yahoo.fr', 'J''ai récemment acheté un système de transmission et une caméra pour la voiture télécommandée de mon mari, et je dois dire que je suis extrêmement satisfaite de cet achat ! Le système de transmission est particulièrement impressionnant. Il a grandement amélioré les performances de la voiture télécommandée, offrant une expérience de conduite fluide et une portée accrue. Je donne 5 étoiles à ce produit pour son excellent fonctionnement et pour la joie qu''il apporte à mon mari.');



