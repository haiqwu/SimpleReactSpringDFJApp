
class RegexEscapeUtil {
    static regExpEscapeAll = literalString => literalString.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, '');
}

export default RegexEscapeUtil;
