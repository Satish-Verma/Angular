//The `FusionCharts.register()` API is used to register the new theme in the FusionCharts core.
FusionCharts.register('theme', {
	name: 'mySampleTheme',
	theme: {
		base: {
			chart: {
				paletteColors: '#ff0000,#00ff00,#0000ff',
				subCaption: 'Harry SuperMart !important', //The !important directive is used to ensure that the sub-caption cannot be overriden in the theme definition or in the chart data.
				captionFontSize: '14',
				subCaptionFontSize: '12',
				captionFontBold: '1',
				subCaptionFontBold: '0',
				showHoverEffect: '1',
				placeValuesInside: '0'
				},
			trendlines: [{
				color: '#FF000',
				thickness: '3',
				dashed: '1',
				dashLen: '4',
				dashGap: '2'
				}]
			},
		column2d: {
			dataset: {
						data: function(dataObj) {
                        	color: (Number(dataObj.value) < 0 ? "#3333FF" : "#CC0000")
                    }
                }
			},
		bubble: {
			chart: {
				drawQuadrant: '1',
				quadrantLineColor: '3',
				quadrantLineThickness: '1',
				quadrantLineAlpha: '4',
				},
			dataset: [{
				regressionLineColor: '#123456',
				regressionLineThickness: '3',
				regressionLineAlpha: '70'  
			}]
		},
		pie2d: {
			chart: {
				showPercentInToolTip: '1',
				enableSmartLabels: '1'
				}
			},
		zoomline: {
			chart: {
			anchorMinRenderDistance : '20'				
				}
			},		
		gantt: {
			processes: [{
				headerFont: 'Arial',
				headerFontSize: '16',
				headerFontColor: '#321ABC',
				headerIsBold: '1',
				headerIsUnderline: '1',
				headerAlign: 'left',
				headerVAlign: 'bottom'
				}]
			},      
		geo: {
			chart: {
				showLabels: '1',
				useSNameInLabels: '1',
				useSNameInToolTip: '0',
				entityFillHoverColor: '#9A9A9A',
				entityFillHoverAlpha: '60',
				markerFillHoverColor: '#8AE65C',
				markerFillHoverAlpha: '60',
				},
			marker: {
				connector: {
					thickness: '4',
					color: '#336699',
					alpha: '60',
					dashed: '1',
					dashLen: '4',
					dashGap: '2'
				}
			}
		}
	}
});
