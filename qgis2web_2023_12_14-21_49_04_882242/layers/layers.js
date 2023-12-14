var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Rasterpotongankecamatan_1 = new ol.format.GeoJSON();
var features_Rasterpotongankecamatan_1 = format_Rasterpotongankecamatan_1.readFeatures(json_Rasterpotongankecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rasterpotongankecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rasterpotongankecamatan_1.addFeatures(features_Rasterpotongankecamatan_1);
var lyr_Rasterpotongankecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rasterpotongankecamatan_1, 
                style: style_Rasterpotongankecamatan_1,
                interactive: true,
                title: '<img src="styles/legend/Rasterpotongankecamatan_1.png" /> Raster potongan kecamatan'
            });
var format_jalan_2 = new ol.format.GeoJSON();
var features_jalan_2 = format_jalan_2.readFeatures(json_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_2.addFeatures(features_jalan_2);
var lyr_jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_2, 
                style: style_jalan_2,
                interactive: true,
                title: '<img src="styles/legend/jalan_2.png" /> jalan'
            });
var format_sungai_3 = new ol.format.GeoJSON();
var features_sungai_3 = format_sungai_3.readFeatures(json_sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_3.addFeatures(features_sungai_3);
var lyr_sungai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_3, 
                style: style_sungai_3,
                interactive: true,
                title: '<img src="styles/legend/sungai_3.png" /> sungai'
            });
var format_Permukimanteratur_4 = new ol.format.GeoJSON();
var features_Permukimanteratur_4 = format_Permukimanteratur_4.readFeatures(json_Permukimanteratur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukimanteratur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukimanteratur_4.addFeatures(features_Permukimanteratur_4);
var lyr_Permukimanteratur_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Permukimanteratur_4, 
                style: style_Permukimanteratur_4,
                interactive: true,
                title: '<img src="styles/legend/Permukimanteratur_4.png" /> Permukiman teratur'
            });
var format_Penginapan_5 = new ol.format.GeoJSON();
var features_Penginapan_5 = format_Penginapan_5.readFeatures(json_Penginapan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penginapan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_5.addFeatures(features_Penginapan_5);
var lyr_Penginapan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Penginapan_5, 
                style: style_Penginapan_5,
                interactive: true,
                title: '<img src="styles/legend/Penginapan_5.png" /> Penginapan'
            });
var format_PusatPerbelanjaan_6 = new ol.format.GeoJSON();
var features_PusatPerbelanjaan_6 = format_PusatPerbelanjaan_6.readFeatures(json_PusatPerbelanjaan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PusatPerbelanjaan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PusatPerbelanjaan_6.addFeatures(features_PusatPerbelanjaan_6);
var lyr_PusatPerbelanjaan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PusatPerbelanjaan_6, 
                style: style_PusatPerbelanjaan_6,
                interactive: true,
                title: '<img src="styles/legend/PusatPerbelanjaan_6.png" /> Pusat Perbelanjaan'
            });
var format_Permukimantidakteratur_7 = new ol.format.GeoJSON();
var features_Permukimantidakteratur_7 = format_Permukimantidakteratur_7.readFeatures(json_Permukimantidakteratur_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukimantidakteratur_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukimantidakteratur_7.addFeatures(features_Permukimantidakteratur_7);
var lyr_Permukimantidakteratur_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Permukimantidakteratur_7, 
                style: style_Permukimantidakteratur_7,
                interactive: true,
                title: '<img src="styles/legend/Permukimantidakteratur_7.png" /> Permukiman tidak teratur'
            });
var format_Monumen_8 = new ol.format.GeoJSON();
var features_Monumen_8 = format_Monumen_8.readFeatures(json_Monumen_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monumen_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monumen_8.addFeatures(features_Monumen_8);
var lyr_Monumen_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Monumen_8, 
                style: style_Monumen_8,
                interactive: true,
                title: '<img src="styles/legend/Monumen_8.png" /> Monumen'
            });
var format_Rumahsakit_9 = new ol.format.GeoJSON();
var features_Rumahsakit_9 = format_Rumahsakit_9.readFeatures(json_Rumahsakit_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumahsakit_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumahsakit_9.addFeatures(features_Rumahsakit_9);
var lyr_Rumahsakit_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rumahsakit_9, 
                style: style_Rumahsakit_9,
                interactive: true,
                title: '<img src="styles/legend/Rumahsakit_9.png" /> Rumah sakit'
            });
var format_Lahankosong_10 = new ol.format.GeoJSON();
var features_Lahankosong_10 = format_Lahankosong_10.readFeatures(json_Lahankosong_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahankosong_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahankosong_10.addFeatures(features_Lahankosong_10);
var lyr_Lahankosong_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahankosong_10, 
                style: style_Lahankosong_10,
                interactive: true,
                title: '<img src="styles/legend/Lahankosong_10.png" /> Lahan kosong'
            });
var format_gedungnegara_11 = new ol.format.GeoJSON();
var features_gedungnegara_11 = format_gedungnegara_11.readFeatures(json_gedungnegara_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gedungnegara_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gedungnegara_11.addFeatures(features_gedungnegara_11);
var lyr_gedungnegara_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gedungnegara_11, 
                style: style_gedungnegara_11,
                interactive: true,
                title: '<img src="styles/legend/gedungnegara_11.png" /> gedung negara'
            });
var format_sekolah_12 = new ol.format.GeoJSON();
var features_sekolah_12 = format_sekolah_12.readFeatures(json_sekolah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah_12.addFeatures(features_sekolah_12);
var lyr_sekolah_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sekolah_12, 
                style: style_sekolah_12,
                interactive: true,
                title: '<img src="styles/legend/sekolah_12.png" /> sekolah'
            });
var format_balaikota_13 = new ol.format.GeoJSON();
var features_balaikota_13 = format_balaikota_13.readFeatures(json_balaikota_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balaikota_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balaikota_13.addFeatures(features_balaikota_13);
var lyr_balaikota_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_balaikota_13, 
                style: style_balaikota_13,
                interactive: true,
                title: '<img src="styles/legend/balaikota_13.png" /> balai kota'
            });
var format_pemakaman_14 = new ol.format.GeoJSON();
var features_pemakaman_14 = format_pemakaman_14.readFeatures(json_pemakaman_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemakaman_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemakaman_14.addFeatures(features_pemakaman_14);
var lyr_pemakaman_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemakaman_14, 
                style: style_pemakaman_14,
                interactive: true,
                title: '<img src="styles/legend/pemakaman_14.png" /> pemakaman'
            });
var format_industri_15 = new ol.format.GeoJSON();
var features_industri_15 = format_industri_15.readFeatures(json_industri_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industri_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industri_15.addFeatures(features_industri_15);
var lyr_industri_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_industri_15, 
                style: style_industri_15,
                interactive: true,
                title: '<img src="styles/legend/industri_15.png" /> industri'
            });
var format_StasiunKereta_16 = new ol.format.GeoJSON();
var features_StasiunKereta_16 = format_StasiunKereta_16.readFeatures(json_StasiunKereta_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StasiunKereta_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StasiunKereta_16.addFeatures(features_StasiunKereta_16);
var lyr_StasiunKereta_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StasiunKereta_16, 
                style: style_StasiunKereta_16,
                interactive: true,
                title: '<img src="styles/legend/StasiunKereta_16.png" /> Stasiun Kereta'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Rasterpotongankecamatan_1.setVisible(true);lyr_jalan_2.setVisible(true);lyr_sungai_3.setVisible(true);lyr_Permukimanteratur_4.setVisible(true);lyr_Penginapan_5.setVisible(true);lyr_PusatPerbelanjaan_6.setVisible(true);lyr_Permukimantidakteratur_7.setVisible(true);lyr_Monumen_8.setVisible(true);lyr_Rumahsakit_9.setVisible(true);lyr_Lahankosong_10.setVisible(true);lyr_gedungnegara_11.setVisible(true);lyr_sekolah_12.setVisible(true);lyr_balaikota_13.setVisible(true);lyr_pemakaman_14.setVisible(true);lyr_industri_15.setVisible(true);lyr_StasiunKereta_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Rasterpotongankecamatan_1,lyr_jalan_2,lyr_sungai_3,lyr_Permukimanteratur_4,lyr_Penginapan_5,lyr_PusatPerbelanjaan_6,lyr_Permukimantidakteratur_7,lyr_Monumen_8,lyr_Rumahsakit_9,lyr_Lahankosong_10,lyr_gedungnegara_11,lyr_sekolah_12,lyr_balaikota_13,lyr_pemakaman_14,lyr_industri_15,lyr_StasiunKereta_16];
lyr_Rasterpotongankecamatan_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_sungai_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Permukimanteratur_4.set('fieldAliases', {'id': 'id', });
lyr_Penginapan_5.set('fieldAliases', {'id': 'id', });
lyr_PusatPerbelanjaan_6.set('fieldAliases', {'id': 'id', });
lyr_Permukimantidakteratur_7.set('fieldAliases', {'id': 'id', });
lyr_Monumen_8.set('fieldAliases', {'id': 'id', });
lyr_Rumahsakit_9.set('fieldAliases', {'id': 'id', });
lyr_Lahankosong_10.set('fieldAliases', {'id': 'id', });
lyr_gedungnegara_11.set('fieldAliases', {'id': 'id', });
lyr_sekolah_12.set('fieldAliases', {'id': 'id', });
lyr_balaikota_13.set('fieldAliases', {'id': 'id', });
lyr_pemakaman_14.set('fieldAliases', {'id': 'id', });
lyr_industri_15.set('fieldAliases', {'id': 'id', });
lyr_StasiunKereta_16.set('fieldAliases', {'id': 'id', });
lyr_Rasterpotongankecamatan_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_sungai_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Permukimanteratur_4.set('fieldImages', {'id': '', });
lyr_Penginapan_5.set('fieldImages', {'id': '', });
lyr_PusatPerbelanjaan_6.set('fieldImages', {'id': '', });
lyr_Permukimantidakteratur_7.set('fieldImages', {'id': '', });
lyr_Monumen_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Rumahsakit_9.set('fieldImages', {'id': '', });
lyr_Lahankosong_10.set('fieldImages', {'id': '', });
lyr_gedungnegara_11.set('fieldImages', {'id': '', });
lyr_sekolah_12.set('fieldImages', {'id': '', });
lyr_balaikota_13.set('fieldImages', {'id': '', });
lyr_pemakaman_14.set('fieldImages', {'id': '', });
lyr_industri_15.set('fieldImages', {'id': '', });
lyr_StasiunKereta_16.set('fieldImages', {'id': '', });
lyr_Rasterpotongankecamatan_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_sungai_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Permukimanteratur_4.set('fieldLabels', {'id': 'no label', });
lyr_Penginapan_5.set('fieldLabels', {'id': 'no label', });
lyr_PusatPerbelanjaan_6.set('fieldLabels', {'id': 'no label', });
lyr_Permukimantidakteratur_7.set('fieldLabels', {'id': 'no label', });
lyr_Monumen_8.set('fieldLabels', {'id': 'no label', });
lyr_Rumahsakit_9.set('fieldLabels', {'id': 'no label', });
lyr_Lahankosong_10.set('fieldLabels', {'id': 'no label', });
lyr_gedungnegara_11.set('fieldLabels', {'id': 'no label', });
lyr_sekolah_12.set('fieldLabels', {'id': 'no label', });
lyr_balaikota_13.set('fieldLabels', {'id': 'no label', });
lyr_pemakaman_14.set('fieldLabels', {'id': 'no label', });
lyr_industri_15.set('fieldLabels', {'id': 'no label', });
lyr_StasiunKereta_16.set('fieldLabels', {'id': 'no label', });
lyr_StasiunKereta_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});