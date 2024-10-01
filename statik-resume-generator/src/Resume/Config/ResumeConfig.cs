using System.Collections.Generic;
using YamlDotNet.Serialization;

namespace Resume.Config
{
    public class ResumeConfig
    {
        public Personal Personal { get; set; }
        
        public Resume Resume { get; set; }
        
        public General General { get; set; }
        
        public List<Recommendation> Recommendations { get; set; }
    }
}