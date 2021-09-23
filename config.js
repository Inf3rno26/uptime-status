// Configuration
window.Config = {

  // Site Name
  SiteName: 'Uptime Status',

  // Site URL
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // Support both Monitor-Specific and  Read-Only type's Api Key
  ApiKeys: [
    'm789269685-420a6a1bbf41a658a861480f',
    'm789269690-af18c0d5341d7e102a90246e',
    'm789270124-5a2d19371897ed5796e8cb00',
    'm789270117-d2b211b128be9288ea724562',
  ],

  // if shows monitored site's URL
  ShowLink: false,

  // Show how many days of log. 
  // API can have 90 days, although free plan says only for 60 days.
  // 60 is a good number for log days. 
  CountDays: 90,

  // Navigation menu at top right. 
  Navi: [
    {
      text: 'Homepage',
      url: 'https://51sec.org/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/51sec/uptime-status'
    }
  ]
};
