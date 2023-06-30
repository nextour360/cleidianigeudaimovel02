(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_2D4F75E3_0C71_D84E_41A0_F4D123A6878C]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_C8831989_EEE0_A095_41DB_1CBE787C0DF9",
  "this.Container_C1683B43_EE61_A195_41DE_7017FDAE4F77",
  "this.Container_C0489276_F1E3_E07C_41E9_87D51CEBEE88"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "minHeight": 20,
 "propagateClick": true,
 "class": "Player",
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "definitions": [{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_2D4F75E3_0C71_D84E_41A0_F4D123A6878C.ogg",
  "mp3Url": "media/audio_2D4F75E3_0C71_D84E_41A0_F4D123A6878C.mp3"
 },
 "autoplay": true,
 "id": "audio_2D4F75E3_0C71_D84E_41A0_F4D123A6878C",
 "data": {
  "label": "809078_Gil_Lewis_-_Lofi_Pop_2_-_AO-001030-1_-_Master_-_90_Bpm_-_100123_-_BOV_-_ORG_-_2444_-_RX (online-audio-converter.com)"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_01433F93_0C30_E8CD_4178_A950F3B59257_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_8_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.46",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_8",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_8.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "duration": 5500,
 "thumbnailUrl": "media/photo_C27CC4B6_F2E3_A0FF_41E8_C554ABFB98F5_t.jpg",
 "width": 1024,
 "class": "Photo",
 "label": "iZSH0c7_2146398e9b453084",
 "id": "photo_C27CC4B6_F2E3_A0FF_41E8_C554ABFB98F5",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_C27CC4B6_F2E3_A0FF_41E8_C554ABFB98F5.jpg"
   }
  ]
 },
 "height": 768
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_3_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.49",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_3.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0662",
 "hfovMin": "150%",
 "id": "panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 140.84,
   "distance": 1,
   "backwardYaw": -76.39,
   "panorama": "this.panorama_01433F93_0C30_E8CD_4178_A950F3B59257"
  }
 ],
 "overlays": [
  "this.panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_tcap0",
  "this.overlay_1F41103D_0C30_783A_419C_183B3AD44601"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/photo_C16EB069_F2E3_BF95_41DE_B27FAC021A0C_t.jpg",
 "width": 1024,
 "class": "Photo",
 "label": "iZSH0c7_2146398e9aad0c7f",
 "id": "photo_C16EB069_F2E3_BF95_41DE_B27FAC021A0C",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_C16EB069_F2E3_BF95_41DE_B27FAC021A0C.jpg"
   }
  ]
 },
 "height": 768
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_6_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.47",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_6",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_6.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_13_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.43",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_13",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_13.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BEDB771_0C30_F84A_41A3_C23E088E911E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.07,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3B89B68B_0C30_F8DE_417B_0B9D2DD37EFA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3B240871_0C30_E84D_4177_3782FB39C5C3",
 "automaticZoomSpeed": 10
},
{
 "duration": 5500,
 "thumbnailUrl": "media/photo_C24190C9_F2E3_A094_41D8_E126DF2F2E4D_t.jpg",
 "width": 1024,
 "class": "Photo",
 "label": "iZSH0c7_2146398e9c709770",
 "id": "photo_C24190C9_F2E3_A094_41D8_E126DF2F2E4D",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_C24190C9_F2E3_A094_41D8_E126DF2F2E4D.jpg"
   }
  ]
 },
 "height": 768
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3B31C89B_0C30_E8FE_41A4_5D4AECCE4F08",
 "automaticZoomSpeed": 10
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.ViewerAreaLabeled_C883D989_EEE0_A095_41D3_8106D308BE0F",
 "id": "ViewerAreaLabeled_C883D989_EEE0_A095_41D3_8106D308BE0FPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_C883C989_EEE0_A095_41ED_A3E0870988B3",
 "buttonNext": "this.IconButton_C883F989_EEE0_A095_41B7_D32BF72059C7"
},
{
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.23,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BB71619_0C30_FBFA_4193_2C2214EBDE30",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0663",
 "hfovMin": "150%",
 "id": "panorama_014180C1_0C30_384A_41A1_A36DB74CC551",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -53.48,
   "distance": 1,
   "backwardYaw": -131.8,
   "panorama": "this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D"
  }
 ],
 "overlays": [
  "this.panorama_014180C1_0C30_384A_41A1_A36DB74CC551_tcap0",
  "this.overlay_1FF8B8AF_0C30_28D6_41A0_EF0BF1400AC3"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 103.09,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BD0882B_0C30_F7DE_4173_5C30CBC9061C",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0667",
 "hfovMin": "150%",
 "id": "panorama_014793E9_0C30_785A_419E_7FD379CAF061",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -76.91,
   "distance": 1,
   "backwardYaw": -13.09,
   "panorama": "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D"
  }
 ],
 "overlays": [
  "this.panorama_014793E9_0C30_785A_419E_7FD379CAF061_tcap0",
  "this.overlay_19B72173_0C10_384E_4198_A4654FC29B8C"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0668",
 "hfovMin": "150%",
 "id": "panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 62.85,
   "distance": 1,
   "backwardYaw": 173.07,
   "panorama": "this.panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 158.38,
   "distance": 1,
   "backwardYaw": 140.02,
   "panorama": "this.panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 95.73,
   "distance": 1,
   "backwardYaw": 124.98,
   "panorama": "this.panorama_017339E5_0C30_284A_4198_2E1F528A8E78"
  }
 ],
 "overlays": [
  "this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_tcap0",
  "this.overlay_19F16AD0_0C10_284A_417B_9A33E4CA1156",
  "this.overlay_1A2888E4_0C10_284A_41A1_B6A49FB46F8A",
  "this.overlay_1A0E589D_0C10_68FA_41A8_3F9AF33A8C72"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.16,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BADC5FA_0C30_F83E_41AA_154E5569BB61",
 "automaticZoomSpeed": 10
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_5_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.48",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_5",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_5.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0661",
 "hfovMin": "150%",
 "id": "panorama_01433F93_0C30_E8CD_4178_A950F3B59257",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -76.39,
   "distance": 1,
   "backwardYaw": 140.84,
   "panorama": "this.panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 163.34,
   "distance": 1,
   "backwardYaw": 146.77,
   "panorama": "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D"
  }
 ],
 "overlays": [
  "this.panorama_01433F93_0C30_E8CD_4178_A950F3B59257_tcap0",
  "this.overlay_1F3F9753_0C37_F84E_4164_AA2F63F71F36",
  "this.overlay_1F4E5F63_0C37_E84D_4196_09F152CA6107"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_10_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.45",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_10",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_10.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_2_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.49 (1)",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_2.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.93,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3853F548_0C30_F85A_41A7_BB7846400E4F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.57,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BBFC63B_0C30_F83E_41A6_ABF020F8EE41",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "25",
 "hfovMin": "150%",
 "id": "panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 145.3,
   "distance": 1,
   "backwardYaw": 80.7,
   "panorama": "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -131.8,
   "distance": 1,
   "backwardYaw": -53.48,
   "panorama": "this.panorama_014180C1_0C30_384A_41A1_A36DB74CC551"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -56.43,
   "distance": 1,
   "backwardYaw": -41.61,
   "panorama": "this.panorama_017339E5_0C30_284A_4198_2E1F528A8E78"
  }
 ],
 "overlays": [
  "this.overlay_1000C0F7_0C10_5836_41A5_7EBCC5A4C6FC",
  "this.overlay_10B146E9_0C10_585A_419E_BB65958433AC",
  "this.overlay_10A52955_0C10_2875_4172_DF4CF7DF3C9C"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6",
   "begin": "this.loopAlbum(this.playList_36DD30F6_0C30_F836_41A7_06D96CADC37C, 0)",
   "player": "this.ViewerAreaLabeled_C883D989_EEE0_A095_41D3_8106D308BE0FPhotoAlbumPlayer"
  }
 ],
 "id": "playList_36DD30F6_0C30_F836_41A7_06D96CADC37C"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.62,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3B9B86E1_0C30_F84A_41A3_4B931C81A80D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_014793E9_0C30_785A_419E_7FD379CAF061_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_01433F93_0C30_E8CD_4178_A950F3B59257",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01433F93_0C30_E8CD_4178_A950F3B59257_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_014180C1_0C30_384A_41A1_A36DB74CC551",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_014180C1_0C30_384A_41A1_A36DB74CC551_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_017339E5_0C30_284A_4198_2E1F528A8E78",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_017339E5_0C30_284A_4198_2E1F528A8E78_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_014793E9_0C30_785A_419E_7FD379CAF061",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_014793E9_0C30_785A_419E_7FD379CAF061_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.91,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BF647A6_0C30_F8D6_4186_20D61C893784",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_01433F93_0C30_E8CD_4178_A950F3B59257",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01433F93_0C30_E8CD_4178_A950F3B59257_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_014180C1_0C30_384A_41A1_A36DB74CC551",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_014180C1_0C30_384A_41A1_A36DB74CC551_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_017339E5_0C30_284A_4198_2E1F528A8E78",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_017339E5_0C30_284A_4198_2E1F528A8E78_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_014793E9_0C30_785A_419E_7FD379CAF061",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_014793E9_0C30_785A_419E_7FD379CAF061_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_12_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.44",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_12",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_12.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.98,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3856D570_0C30_F84A_418E_14DF4242A6CB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "id": "panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_017339E5_0C30_284A_4198_2E1F528A8E78_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -117.15,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BA305B6_0C30_F836_4178_ED59D09FC964",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0659",
 "hfovMin": "150%",
 "id": "panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -108.3,
   "distance": 1,
   "backwardYaw": -82.93,
   "panorama": "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D"
  }
 ],
 "overlays": [
  "this.panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0",
  "this.overlay_1C9DFD50_0C30_284B_419B_F16B944B33E4"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_11_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.44 (1)",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_11",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_11.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.2,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BA555D8_0C30_F87A_419C_74CD0CDA774B",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0664",
 "hfovMin": "150%",
 "id": "panorama_017339E5_0C30_284A_4198_2E1F528A8E78",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -41.61,
   "distance": 1,
   "backwardYaw": -56.43,
   "panorama": "this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 124.98,
   "distance": 1,
   "backwardYaw": 95.73,
   "panorama": "this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC"
  }
 ],
 "overlays": [
  "this.panorama_017339E5_0C30_284A_4198_2E1F528A8E78_tcap0",
  "this.overlay_1838B245_0C33_D84A_41A5_E3D1E0D03EEC",
  "this.overlay_18FCA695_0C31_F8CA_41A4_FFAC29900402"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.27,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3B806662_0C30_F84E_4194_6296FC9423D1",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0666",
 "hfovMin": "150%",
 "id": "panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -83.34,
   "distance": 1,
   "backwardYaw": -52.25,
   "panorama": "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 140.02,
   "distance": 1,
   "backwardYaw": 158.38,
   "panorama": "this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC"
  }
 ],
 "overlays": [
  "this.panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_tcap0",
  "this.overlay_18C474DA_0C10_F87F_4197_E15E084FDDB7",
  "this.overlay_196319A7_0C10_28D6_41A7_91025F686806"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_4_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.48 (1)",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_4",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_4.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 71.7,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BCA1803_0C30_F7CE_4189_33962EB5A39B",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_t.png",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6",
 "class": "PhotoAlbum",
 "label": "\u00c1lbum de Fotos WhatsApp Image 2023-06-30 at 13.29.50 (1)",
 "playList": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_AlbumPlayList"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/photo_C16EBAAD_F2E3_A0EF_41D2_C29DD593E914_t.jpg",
 "width": 1024,
 "class": "Photo",
 "label": "iZSH0c7_2146398e9cc37e14",
 "id": "photo_C16EBAAD_F2E3_A0EF_41D2_C29DD593E914",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_C16EBAAD_F2E3_A0EF_41D2_C29DD593E914.jpg"
   }
  ]
 },
 "height": 768
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.7,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BDE6850_0C30_E84A_4188_CECCC6A0D60E",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0660",
 "hfovMin": "150%",
 "id": "panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -82.93,
   "distance": 1,
   "backwardYaw": -108.3,
   "panorama": "this.panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -13.09,
   "distance": 1,
   "backwardYaw": -76.91,
   "panorama": "this.panorama_014793E9_0C30_785A_419E_7FD379CAF061"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 80.7,
   "distance": 1,
   "backwardYaw": 145.3,
   "panorama": "this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -52.25,
   "distance": 1,
   "backwardYaw": -83.34,
   "panorama": "this.panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 146.77,
   "distance": 1,
   "backwardYaw": 163.34,
   "panorama": "this.panorama_01433F93_0C30_E8CD_4178_A950F3B59257"
  }
 ],
 "overlays": [
  "this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_tcap0",
  "this.overlay_1D7A6E9F_0C30_68F6_4188_38CA8CF4915F",
  "this.overlay_1DE93790_0C30_78CA_4193_1E88F8D25C02",
  "this.overlay_1DFD6A56_0C30_6876_4196_80DB384DB40C",
  "this.overlay_1EAD7C94_0C30_68CA_41A0_D2BC36C44EDE",
  "this.overlay_3826E71B_0C30_39FE_4187_13546AA91DD3"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_014180C1_0C30_384A_41A1_A36DB74CC551_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_1_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.50",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_1.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_9_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.45 (1)",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_9",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_9.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 127.75,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3B9246B9_0C30_F83A_41A2_0C9487B746F0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.02,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_385AC594_0C30_F8CB_4199_E1BE3231CEE7",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "GS__0669",
 "hfovMin": "150%",
 "id": "panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 173.07,
   "distance": 1,
   "backwardYaw": 62.85,
   "panorama": "this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC"
  }
 ],
 "overlays": [
  "this.panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_tcap0",
  "this.overlay_1A688B4C_0C17_E85A_4191_056271B8168B"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_t.jpg",
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.52,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BE5A737_0C30_F836_419B_D48304A965FB",
 "automaticZoomSpeed": 10
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_7_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.46 (1)",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_7",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_7.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 103.61,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BFD17DA_0C30_F87E_41A6_0333BE769710",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.3,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3BE3970B_0C30_F9DE_4197_01824E6D11E0",
 "automaticZoomSpeed": 10
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_0_t.jpg",
 "width": 1200,
 "class": "Photo",
 "label": "WhatsApp Image 2023-06-30 at 13.29.50 (1)",
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_0",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_0.jpeg"
   }
  ]
 },
 "height": 1600
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "width": 550,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": 34,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 140,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--STICKER"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 641,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "layout": "absolute",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "gap": 10,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)"
},
{
 "scrollBarOpacity": 0,
 "id": "Container_C8831989_EEE0_A095_41DB_1CBE787C0DF9",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "right": "0%",
 "layout": "absolute",
 "children": [
  "this.Container_C883B989_EEE0_A095_41E2_71BE8A6C27D7"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C1683B43_EE61_A195_41DE_7017FDAE4F77",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "layout": "absolute",
 "children": [
  "this.Container_C1693B41_EE61_A194_41A2_55730F67B0C3",
  "this.Container_C1681B43_EE61_A195_41E8_37B3A72A462E"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--CONTACT"
 },
 "gap": 10,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_C1683B43_EE61_A195_41DE_7017FDAE4F77, false, 0, null, null, false)"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C0489276_F1E3_E07C_41E9_87D51CEBEE88",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "layout": "absolute",
 "children": [
  "this.Container_C04BC275_F1E3_E07C_41EB_A456272DE305",
  "this.Container_C048B276_F1E3_E07C_41DE_0FCDCC5E989B"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--INFO photo"
 },
 "gap": 10,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_C0489276_F1E3_E07C_41E9_87D51CEBEE88, false, 0, null, null, false)"
},
{
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.84,
   "hfov": 12.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.43
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_01433F93_0C30_E8CD_4178_A950F3B59257, this.camera_3BFD17DA_0C30_F87E_41A6_0333BE769710); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA3CA71_0C10_284D_41A7_976C9692DC59",
   "pitch": -5.43,
   "yaw": 140.84,
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1F41103D_0C30_783A_419C_183B3AD44601",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_C883D989_EEE0_A095_41D3_8106D308BE0F",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "show": "this.ViewerAreaLabeled_C883D989_EEE0_A095_41D3_8106D308BE0F.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_36DD30F6_0C30_F836_41A7_06D96CADC37C.set('selectedIndex', -1); }, this); this.playList_36DD30F6_0C30_F836_41A7_06D96CADC37C.set('selectedIndex', 0)",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "playbackBarHeadOpacity": 1,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "maxHeight": 60,
 "id": "IconButton_C883C989_EEE0_A095_41ED_A3E0870988B3",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_C883C989_EEE0_A095_41ED_A3E0870988B3_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_C883C989_EEE0_A095_41ED_A3E0870988B3_pressed.png",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_C883C989_EEE0_A095_41ED_A3E0870988B3.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_C883F989_EEE0_A095_41B7_D32BF72059C7",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_C883F989_EEE0_A095_41B7_D32BF72059C7_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_C883F989_EEE0_A095_41B7_D32BF72059C7_pressed.png",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_C883F989_EEE0_A095_41B7_D32BF72059C7.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_014180C1_0C30_384A_41A1_A36DB74CC551_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.48,
   "hfov": 12.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.48
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D, this.camera_3BA555D8_0C30_F87A_419C_74CD0CDA774B); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA25A71_0C10_284D_4195_0794E3D87B31",
   "pitch": -7.48,
   "yaw": -53.48,
   "hfov": 12.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1FF8B8AF_0C30_28D6_41A0_EF0BF1400AC3",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_014793E9_0C30_785A_419E_7FD379CAF061_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.91,
   "hfov": 23.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -36.82
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D, this.camera_3BF647A6_0C30_F8D6_4186_20D61C893784); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA74A73_0C10_284E_4160_90AFDA1F1E16",
   "pitch": -36.82,
   "yaw": -76.91,
   "hfov": 23.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_19B72173_0C10_384E_4198_A4654FC29B8C",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.85,
   "hfov": 12.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.35
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C, this.camera_3853F548_0C30_F85A_41A7_BB7846400E4F); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA7EA73_0C10_284E_4196_39758529FE2E",
   "pitch": -4.35,
   "yaw": 62.85,
   "hfov": 12.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_19F16AD0_0C10_284A_417B_9A33E4CA1156",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.38,
   "hfov": 12.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.42
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB, this.camera_3856D570_0C30_F84A_418E_14DF4242A6CB); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA67A73_0C10_284E_4190_ECE429ED3F55",
   "pitch": -6.42,
   "yaw": 158.38,
   "hfov": 12.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1A2888E4_0C10_284A_41A1_B6A49FB46F8A",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.73,
   "hfov": 5.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.3
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_017339E5_0C30_284A_4198_2E1F528A8E78, this.camera_385AC594_0C30_F8CB_4199_E1BE3231CEE7); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA6AA73_0C10_284E_4164_2BD3F0FBA41E",
   "pitch": -5.3,
   "yaw": 95.73,
   "hfov": 5.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1A0E589D_0C10_68FA_41A8_3F9AF33A8C72",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_01433F93_0C30_E8CD_4178_A950F3B59257_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.34,
   "hfov": 12.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.8
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D, this.camera_3BB71619_0C30_FBFA_4193_2C2214EBDE30); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA30A70_0C10_284A_419D_1DDDAEE30410",
   "pitch": -3.8,
   "yaw": 163.34,
   "hfov": 12.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1F3F9753_0C37_F84E_4164_AA2F63F71F36",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.39,
   "hfov": 12.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.43
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF, this.camera_3BADC5FA_0C30_F83E_41AA_154E5569BB61); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA3BA71_0C10_284D_41A4_4152F42678BF",
   "pitch": -5.43,
   "yaw": -76.39,
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1F4E5F63_0C37_E84D_4196_09F152CA6107",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.3,
   "hfov": 12.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.94
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D, this.camera_3BE3970B_0C30_F9DE_4197_01824E6D11E0); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_12D4202F_0C70_37D6_4161_4D563F454A9E",
   "pitch": -6.94,
   "yaw": 145.3,
   "hfov": 12.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1000C0F7_0C10_5836_41A5_7EBCC5A4C6FC",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.8,
   "hfov": 12.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.94
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_014180C1_0C30_384A_41A1_A36DB74CC551, this.camera_3BE5A737_0C30_F836_419B_D48304A965FB); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_12D4002F_0C70_37D6_4197_DFF46811432D",
   "pitch": -5.94,
   "yaw": -131.8,
   "hfov": 12.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_10B146E9_0C10_585A_419E_BB65958433AC",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.43,
   "hfov": 12.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.18
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_017339E5_0C30_284A_4198_2E1F528A8E78, this.camera_3BEDB771_0C30_F84A_41A3_C23E088E911E); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_12D4D02F_0C70_37D6_418E_51C480EA1B47",
   "pitch": -4.18,
   "yaw": -56.43,
   "hfov": 12.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_10A52955_0C10_2875_4172_DF4CF7DF3C9C",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.3,
   "hfov": 12.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.16
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D, this.camera_3B89B68B_0C30_F8DE_417B_0B9D2DD37EFA); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EAECA6F_0C10_2856_41A4_50B8B87A74C1",
   "pitch": -2.16,
   "yaw": -108.3,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1C9DFD50_0C30_284B_419B_F16B944B33E4",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_017339E5_0C30_284A_4198_2E1F528A8E78_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.61,
   "hfov": 12.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.16
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D, this.camera_3BBFC63B_0C30_F83E_41A6_ABF020F8EE41); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA2EA71_0C10_284D_41A5_4625BF317675",
   "pitch": -2.16,
   "yaw": -41.61,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1838B245_0C33_D84A_41A5_E3D1E0D03EEC",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.98,
   "hfov": 12.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.04
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC, this.camera_3B806662_0C30_F84E_4194_6296FC9423D1); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA11A71_0C10_284D_418C_9BBD2A62DAFF",
   "pitch": -5.04,
   "yaw": 124.98,
   "hfov": 12.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_18FCA695_0C31_F8CA_41A4_FFAC29900402",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.02,
   "hfov": 12.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.84
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC, this.camera_3B9B86E1_0C30_F84A_41A3_4B931C81A80D); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA09A73_0C10_284E_418A_4ABDA576B19E",
   "pitch": -5.84,
   "yaw": 140.02,
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_18C474DA_0C10_F87F_4197_E15E084FDDB7",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.34,
   "hfov": 12.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.61
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D, this.camera_3B9246B9_0C30_F83A_41A2_0C9487B746F0); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA73A73_0C10_284E_4158_70DEC8EA01FC",
   "pitch": -4.61,
   "yaw": -83.34,
   "hfov": 12.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_196319A7_0C10_28D6_41A7_91025F686806",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_0",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.53",
     "y": "0.55",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_1",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.44",
     "y": "0.62",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_2",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.43",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_3",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.41",
     "y": "0.42",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_4",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.43",
     "y": "0.53",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_5",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "y": "0.69",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_6",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.49",
     "y": "0.25",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_7",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.44",
     "y": "0.65",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_8",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.25",
     "y": "0.64",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_9",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.44",
     "y": "0.27",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_10",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.70",
     "y": "0.51",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_11",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.36",
     "y": "0.49",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_12",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.40",
     "y": "0.41",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_13",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 3000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.45",
     "y": "0.36",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  }
 ],
 "id": "album_3C1EA752_0CF0_384E_4180_7C6CE272F8D6_AlbumPlayList"
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.7,
   "hfov": 12.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.57
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D, this.camera_3BDE6850_0C30_E84A_4188_CECCC6A0D60E); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EADBA6F_0C10_2856_4190_7BF20A75E5CE",
   "pitch": -2.57,
   "yaw": 80.7,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1D7A6E9F_0C30_68F6_4188_38CA8CF4915F",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.93,
   "hfov": 12.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.43
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC, this.camera_3BCA1803_0C30_F7CE_4189_33962EB5A39B); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EADEA6F_0C10_2856_4144_C71247F273BE",
   "pitch": -5.43,
   "yaw": -82.93,
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1DE93790_0C30_78CA_4193_1E88F8D25C02",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.25,
   "hfov": 12.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.66
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB, this.camera_3B240871_0C30_E84D_4177_3782FB39C5C3); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EAC0A70_0C10_284A_4190_4AB2E6BD8008",
   "pitch": -6.66,
   "yaw": -52.25,
   "hfov": 12.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1DFD6A56_0C30_6876_4196_80DB384DB40C",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.09,
   "hfov": 12.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_014793E9_0C30_785A_419E_7FD379CAF061, this.camera_3BD0882B_0C30_F7DE_4173_5C30CBC9061C); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EACFA70_0C10_284A_41A0_B59F588F750A",
   "pitch": -9,
   "yaw": -13.09,
   "hfov": 12.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1EAD7C94_0C30_68CA_41A0_D2BC36C44EDE",
 "data": {
  "label": "Arrow 03 Right"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.77,
   "hfov": 8.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.59
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_01433F93_0C30_E8CD_4178_A950F3B59257, this.camera_3B31C89B_0C30_E8FE_41A4_5D4AECCE4F08); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36276101_0C30_F9CA_41A2_D0BEB65A895A",
   "pitch": -0.59,
   "yaw": 146.77,
   "hfov": 8.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3826E71B_0C30_39FE_4187_13546AA91DD3",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": true,
 "hfov": 36,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_tcap0.png",
    "width": 3536,
    "height": 3536
   }
  ]
 },
 "rotate": false,
 "id": "panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_tcap0",
 "distance": 50
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.07,
   "hfov": 12.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.48
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC, this.camera_3BA305B6_0C30_F836_4178_ED59D09FC964); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EA74A74_0C10_284A_419B_6C4DA0C2EE8E",
   "pitch": -1.48,
   "yaw": 173.07,
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1A688B4C_0C17_E85A_4191_056271B8168B",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "width": 136,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": 2,
 "verticalAlign": "top",
 "height": 78,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "width": 366,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0.01
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": 86,
 "verticalAlign": "top",
 "height": 46,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "blue block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 391,
 "borderRadius": 0,
 "minHeight": 1,
 "text": "LOREM IPSUM",
 "propagateClick": true,
 "class": "Label",
 "top": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 75,
 "fontSize": 61,
 "borderSize": 0,
 "fontStyle": "italic",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 1"
 },
 "visible": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#000000"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Oswald",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "paddingLeft": 0,
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 385,
 "borderRadius": 0,
 "minHeight": 1,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "propagateClick": true,
 "class": "Label",
 "top": 90,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "minWidth": 1,
 "height": 44,
 "fontSize": 28,
 "textShadowHorizontalLength": 0,
 "borderSize": 0,
 "fontStyle": "italic",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 2"
 },
 "visible": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "textShadowVerticalLength": 0,
 "fontColor": "#FFFFFF"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": 110,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "button menu sup"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "width": "91.304%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "85.959%",
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-button set"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "backgroundOpacity": 0,
 "width": 330,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": 0,
 "paddingLeft": 0,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "- EXPANDED"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C883B989_EEE0_A095_41E2_71BE8A6C27D7",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "layout": "vertical",
 "children": [
  "this.Container_C883A989_EEE0_A095_41E2_9E65BB3CE9BD"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C1693B41_EE61_A194_41A2_55730F67B0C3",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "layout": "horizontal",
 "children": [
  "this.Container_C1692B41_EE61_A194_41C5_71448E017EB9",
  "this.Container_C169FB41_EE61_A194_41DC_03A3A32BEF11"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C1681B43_EE61_A195_41E8_37B3A72A462E",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "layout": "vertical",
 "children": [
  "this.IconButton_C1680B43_EE61_A195_41D3_91B8D64E7419"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 20,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C04BC275_F1E3_E07C_41EB_A456272DE305",
 "left": "22.95%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "layout": "horizontal",
 "children": [
  "this.Container_C0483275_F1E3_E07C_41E7_604DCAE4942E",
  "this.Container_C0481275_F1E3_E07C_41E9_1C8EE843B19F"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C048B276_F1E3_E07C_41DE_0FCDCC5E989B",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "layout": "vertical",
 "children": [
  "this.IconButton_C048A276_F1E3_E07C_41E9_014CFE419C28"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 20,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 }
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0173D813_0C30_D7CD_41A7_F837D4DD4CAF_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA3CA71_0C10_284D_41A7_976C9692DC59",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_014180C1_0C30_384A_41A1_A36DB74CC551_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA25A71_0C10_284D_4195_0794E3D87B31",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_014793E9_0C30_785A_419E_7FD379CAF061_1_HS_0_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_2EA74A73_0C10_284E_4160_90AFDA1F1E16",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA7EA73_0C10_284E_4196_39758529FE2E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA67A73_0C10_284E_4190_ECE429ED3F55",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_01737CA3_0C30_68CE_41A7_05D1A201F0EC_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA6AA73_0C10_284E_4164_2BD3F0FBA41E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA30A70_0C10_284A_419D_1DDDAEE30410",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_01433F93_0C30_E8CD_4178_A950F3B59257_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA3BA71_0C10_284D_41A4_4152F42678BF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_12D4202F_0C70_37D6_4161_4D563F454A9E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_12D4002F_0C70_37D6_4197_DFF46811432D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_131E3D91_0C10_E8CA_41A4_95BA784A5F1D_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_12D4D02F_0C70_37D6_418E_51C480EA1B47",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0337FF60_0C30_284A_41A3_49E329A4F2EC_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EAECA6F_0C10_2856_41A4_50B8B87A74C1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA2EA71_0C10_284D_41A5_4625BF317675",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_017339E5_0C30_284A_4198_2E1F528A8E78_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA11A71_0C10_284D_418C_9BBD2A62DAFF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA09A73_0C10_284E_418A_4ABDA576B19E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_01737B51_0C30_684A_41A3_037DA9B6DDFB_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA73A73_0C10_284E_4158_70DEC8EA01FC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EADBA6F_0C10_2856_4190_7BF20A75E5CE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EADEA6F_0C10_2856_4144_C71247F273BE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EAC0A70_0C10_284A_4190_4AB2E6BD8008",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_1_HS_4_0.png",
   "width": 640,
   "height": 960
  }
 ],
 "id": "AnimatedImageResource_2EACFA70_0C10_284A_41A0_B59F588F750A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0177F6C8_0C30_F85B_4194_A6A22B73D13D_0_HS_5_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_36276101_0C30_F9CA_41A2_D0BEB65A895A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_014D55CF_0C30_5856_41A6_7DB01C41B25C_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2EA74A74_0C10_284A_419B_6C4DA0C2EE8E",
 "frameCount": 24
},
{
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 23,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container black"
 },
 "height": "100%"
},
{
 "maxHeight": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 9,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 28,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "top": "46.04%",
 "verticalAlign": "middle",
 "bottom": "47.23%",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand",
 "maxWidth": 80
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "74.545%",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container"
 },
 "height": "100%"
},
{
 "maxHeight": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "width": 33,
 "paddingRight": 0,
 "right": 67,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "top": "44.03%",
 "verticalAlign": "middle",
 "bottom": "51.29%",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand",
 "maxWidth": 50
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 140,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "paddingLeft": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "width": "100%",
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "minHeight": 1,
 "itemPaddingLeft": 3,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMinWidth": 50,
 "height": "92%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "paddingRight": 70,
 "itemLabelFontSize": 16,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "class": "ThumbnailGrid",
 "itemThumbnailShadow": false,
 "itemBackgroundColorDirection": "vertical",
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "paddingBottom": 70,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "selectedItemLabelFontWeight": "bold",
 "horizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "itemMode": "normal",
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontFamily": "Oswald",
 "rollOverItemLabelFontColor": "#04A3E1"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C883A989_EEE0_A095_41E2_9E65BB3CE9BD",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_C883D989_EEE0_A095_41D3_8106D308BE0F",
  "this.IconButton_C883C989_EEE0_A095_41ED_A3E0870988B3",
  "this.IconButton_C883F989_EEE0_A095_41B7_D32BF72059C7",
  "this.IconButton_C883E989_EEE0_A095_41B5_D66CA26E06EE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "height": "100%"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C1692B41_EE61_A194_41C5_71448E017EB9",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "85%",
 "children": [
  "this.Image_C09D7B50_EE60_E1B4_41EC_30862F902E7E"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 10,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "height": "100%"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_C169FB41_EE61_A194_41DC_03A3A32BEF11",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "overflow": "visible",
 "width": "50%",
 "children": [
  "this.Container_C169EB41_EE61_A194_41DB_D7E56F0428D9",
  "this.Container_C1699B41_EE61_A194_41D9_F48EB3C5F43F",
  "this.Container_C1686B43_EE61_A195_41DB_BF8863B96D8C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "id": "IconButton_C1680B43_EE61_A195_41D3_91B8D64E7419",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_C1680B43_EE61_A195_41D3_91B8D64E7419_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_C1680B43_EE61_A195_41D3_91B8D64E7419_pressed.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_C1683B43_EE61_A195_41DE_7017FDAE4F77, false, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_C1680B43_EE61_A195_41D3_91B8D64E7419.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_C1680B43_EE61_A195_41D3_91B8D64E7419_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C0483275_F1E3_E07C_41E7_604DCAE4942E",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "0.135%",
 "children": [
  "this.Image_3838FB91_0C10_28CA_419A_A8ADB25837BE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "height": "100%"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_C0481275_F1E3_E07C_41E9_1C8EE843B19F",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "overflow": "visible",
 "width": "62.411%",
 "children": [
  "this.Container_C0480275_F1E3_E07C_41E1_710757CF421D",
  "this.Container_C0487276_F1E3_E07C_41EC_743806B3D20E",
  "this.Container_C0484276_F1E3_E07C_41A8_47CF7E03E868"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "id": "IconButton_C048A276_F1E3_E07C_41E9_014CFE419C28",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_C048A276_F1E3_E07C_41E9_014CFE419C28_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_C048A276_F1E3_E07C_41E9_014CFE419C28_pressed.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_C0489276_F1E3_E07C_41E9_87D51CEBEE88, false, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_C048A276_F1E3_E07C_41E9_014CFE419C28.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_C048A276_F1E3_E07C_41E9_014CFE419C28_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "paddingLeft": 40,
 "scrollBarVisible": "rollOver",
 "paddingRight": 40,
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "width": "99.593%",
 "children": [
  "this.Image_13DC143E_02A9_9695_4184_72D35C4BDB48",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "- Buttons set"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": true,
 "class": "IconButton",
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "mode": "push",
 "height": "36.14%",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_C883E989_EEE0_A095_41B5_D66CA26E06EE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "10%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_C883E989_EEE0_A095_41B5_D66CA26E06EE_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "mode": "push",
 "height": "10%",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_C883E989_EEE0_A095_41B5_D66CA26E06EE_pressed.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_C8831989_EEE0_A095_41DB_1CBE787C0DF9, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_C883E989_EEE0_A095_41B5_D66CA26E06EE.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 636,
 "id": "Image_C09D7B50_EE60_E1B4_41EC_30862F902E7E",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_C09D7B50_EE60_E1B4_41EC_30862F902E7E.png",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "6.48%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "83.414%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image85276"
 },
 "scaleMode": "fit_inside",
 "maxWidth": 634
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C169EB41_EE61_A194_41DB_D7E56F0428D9",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 60,
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_C1699B41_EE61_A194_41D9_F48EB3C5F43F",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "76.111%",
 "children": [
  "this.HTMLText_C1698B41_EE61_A194_41E4_3BBE2272A687",
  "this.HTMLText_C1684B41_EE61_A194_41EA_A40A145E1B91",
  "this.Button_C1687B43_EE61_A195_4198_C5BF5E529938"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "height": "87.891%"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C1686B43_EE61_A195_41DB_BF8863B96D8C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "maxHeight": 1264,
 "id": "Image_3838FB91_0C10_28CA_419A_A8ADB25837BE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "width": "86.989%",
 "borderRadius": 0,
 "url": "skin/Image_3838FB91_0C10_28CA_419A_A8ADB25837BE.jpeg",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image82141"
 },
 "scaleMode": "fit_inside",
 "maxWidth": 948
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C0480275_F1E3_E07C_41E1_710757CF421D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 60,
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_C0487276_F1E3_E07C_41EC_743806B3D20E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_C0486276_F1E3_E07C_41B5_6D21337FC24A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "height": "100%"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_C0484276_F1E3_E07C_41A8_47CF7E03E868",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "maxHeight": 1095,
 "id": "Image_13DC143E_02A9_9695_4184_72D35C4BDB48",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "-1.21%",
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_13DC143E_02A9_9695_4184_72D35C4BDB48.png",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "-7.77%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "32.621%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image5371"
 },
 "scaleMode": "fit_inside",
 "maxWidth": 1095
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_F010CDB0_EE27_E0F3_41CA_A0A7BD04AF3A",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_CB2AC48F_EEE0_60AD_41D4_AF45A5C9B26B",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_CB84BCFF_EEE3_E06D_41ED_0B272180DB22",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_CD2D6DF6_EEE1_A07C_41EA_D48A6221E560",
  "this.Container_F1D73148_EE20_6193_41C0_EA322B73E5B2",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "23.86%",
 "verticalAlign": "middle",
 "bottom": "28.14%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 1"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "bottom",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": 130,
 "gap": 5,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Container footer"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-1"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-2"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-3"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-4"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-5"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-6"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_C1698B41_EE61_A194_41E4_3BBE2272A687",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "12.041%",
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.87vh;font-family:'Otama.ep';\">Cleidiani Geuda</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#BBD149",
 "data": {
  "name": "HTMLText24905"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_C1684B41_EE61_A194_41EA_A40A145E1B91",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "32.857%",
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:3.03vh;font-family:'Antonio';\"><B>INFO.:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Open Sans Semibold';\">CRECI:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.02vh;font-family:'Open Sans Semibold';\"> 42.845 F</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Open Sans Semibold';\">Site: </SPAN><SPAN STYLE=\"color:#999999;font-size:2.02vh;font-family:'Open Sans Semibold';\">www.cleidianigeuda.com.br</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Open Sans Semibold';\">Contato:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.02vh;font-family:'Open Sans Semibold';\"> (49) 99913-1604 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Open Sans Semibold';\">Instagram:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.02vh;font-family:'Open Sans Semibold';\"> cleidianigeuda</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarColor": "#B3D237",
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Antonio",
 "id": "Button_C1687B43_EE61_A195_4198_C5BF5E529938",
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "paddingRight": 0,
 "gap": 5,
 "width": 97,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.openLink('https://wa.me/554999131604', '_blank')",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 28,
 "layout": "horizontal",
 "borderColor": "#000000",
 "mode": "push",
 "minWidth": 1,
 "fontSize": "3.26vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "CONTATE",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#99BB1B"
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button book now"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_C0486276_F1E3_E07C_41B5_6D21337FC24A",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "86.939%",
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.23vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.37vh;font-family:'Bebas Neue Bold';\"><B>Casa Presidente M\u00e9dice</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.86vh;font-family:'Bebas Neue Bold';\">Detalhes:</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\">Essa casa vai te surpreender, muito espa\u00e7o e conforto, possui duas su\u00edtes, uma m\u00e1ster, mais um dormit\u00f3rio, um s\u00f3t\u00e3o que pode ser utilizado como sala de Tv, escrit\u00f3rio, biblioteca, adega...</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\">Muita ilumina\u00e7\u00e3o natural, p\u00e9 direito alto, sala de entrada super aconchegante com lareira. (Avalia permuta)</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.69vh;font-family:'Bebas Neue Bold';\"><B>CARACTER\u00cdSTICAS</B></SPAN><SPAN STYLE=\"font-size:1.51vh;font-family:'Bebas Neue Bold';\"><B>:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> \u2022 \u00c1rea Total: 369 m\u00b2 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> \u2022 \u00c1rea Privatica: 132 m\u00b2 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> \u2022 Su\u00edtes: 2</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> \u2022 Dormit\u00f3rios: 3</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> \u2022 Vagas de Garagem: 3</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.36vh;font-family:'Bebas Neue Bold';\"><B>VENDA: </B></SPAN><SPAN STYLE=\"color:#04a3e1;font-size:3.53vh;font-family:'Bebas Neue Bold';\"><B>r$1.272.000,00 </B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "SALA ",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Tour Info"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_F010CDB0_EE27_E0F3_41CA_A0A7BD04AF3A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "COZINHA",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Panorama List"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_CB2AC48F_EEE0_60AD_41D4_AF45A5C9B26B",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "SAL\u00c3O DE FESTAS",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 7)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "TERRA\u00c7O",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_CB84BCFF_EEE3_E06D_41ED_0B272180DB22",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Inserdt Text",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "class": "Button",
 "propagateClick": true,
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "LAVANDERIA",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Location"
 },
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_CD2D6DF6_EEE1_A07C_41EA_D48A6221E560",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 8)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "FUNDOS",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Panorama List"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_F1D73148_EE20_6193_41C0_EA322B73E5B2",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "QUARTOS >",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Contact"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": 40,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "blue line"
 },
 "backgroundColor": [
  "#5CA1DE"
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "HTMLText",
 "minWidth": 1,
 "height": 78,
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": 56,
 "borderSize": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 1"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 44,
 "borderSize": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 2"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": 18,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "BACK",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Main Entrance",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lobby",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Reception",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Reception",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Meeting Area 1",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Meeting Area 2",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Bar",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Chill Out",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Terrace",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Garden",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": 18,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "BACK",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": 18,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "BACK",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": 18,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "BACK",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": 18,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "BACK",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": 18,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "VOLTAR",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 30,
 "data": {
  "name": "Button <BACK"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Su\u00edte",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 1"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Su\u00edte 2",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Quarto 3",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button text 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "maxHeight": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "borderSize": 0,
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_C0489276_F1E3_E07C_41E9_87D51CEBEE88, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_C1683B43_EE61_A195_41DE_7017FDAE4F77, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_C8831989_EEE0_A095_41DB_1CBE787C0DF9, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
}],
 "minWidth": 20,
 "vrPolyfillScale": 0.7,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Player468"
 },
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } }
 },
 "gap": 10,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
