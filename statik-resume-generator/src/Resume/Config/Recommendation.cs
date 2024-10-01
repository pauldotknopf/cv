using YamlDotNet.Serialization;

namespace Resume.Config;

public class Recommendation
{
    [YamlMember(Alias = "name")]
    public string Name { get; set; }
    
    [YamlMember(Alias = "position")]
    public string Position { get; set; }
    
    [YamlMember(Alias = "profile")]
    public string Profile { get; set; }
    
    [YamlMember(Alias = "summary")]
    public string Summary { get; set; }
    
    [YamlMember(Alias = "letterLink")]
    public string LetterLink { get; set; }
}