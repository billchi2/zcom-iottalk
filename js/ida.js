  $(function(){
        csmapi.set_endpoint ('https://farm1.iottalk.tw');
       
        var profile = {
		'dm_name': 'Dummy_Device',          
		'idf_list':[Dummy_Sensor],
              'odf_list':[Dummy_Control],
		'd_name': undefined,
        };
			
        function Dummy_Sensor(){
                 return ['SoilMoisture', 'SoilTemperature', 'SoilConductivity', 'SoilTDS', 'SoilPH', 'atmospheric temperature', 'Atmospheric humidity', 'Atmospheric pressure', 'carbon dioxide', 'luminosity', 'infrared', 'UVI'];
                       }

        function Dummy_Control(data){
           $('.ODF_value')[0].innerText=data[0];
                          }
      
/*******************************************************************/                
        function ida_init(){
	    console.log(profile.d_name);
	}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
